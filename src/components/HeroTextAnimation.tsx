import { useEffect, useState } from "react";

type HeroTextAnimationProps = {
  texts: string[];
};

const HeroTextAnimation = ({ texts }: HeroTextAnimationProps) => {
  const [textAnimation, setTextAnimation] = useState(texts[0]);
  const [translation, setTranslation] = useState(0);

  useEffect(() => {
    let currentIndex = 1;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const animateText = () => {
      const currentText = texts[currentIndex];
      let newText = "";

      for (let i = 0; i < currentText.length; i++) {
        setTimeout(() => {
          newText += currentText[i];
          setTextAnimation(newText);

          if (i === currentText.length - 1 && texts[currentIndex] != "Student" && currentIndex !== texts.length - 1) {
            setTimeout(() => {
              setTranslation((prevTranslation) => prevTranslation + 100);
            }, currentText.length * 100);
          }
        }, i * 300);
      }

      currentIndex = (currentIndex + 1) % texts.length;

      if (currentIndex === 0) {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(animateText, texts.length * 450);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts]);

  return (
    <div className={`ml-2 flex w-[150px] overflow-hidden text-[#3B61CF]`}>
      {texts.map((text, index) => (
        <span
          key={index}
          className={`w-full flex-shrink-0 duration-1000 ease-in-out transition-transform`}
          style={{
            transform: `translateX(${-translation}%)`,
            whiteSpace: "nowrap",
          }}
        >
          {textAnimation}
        </span>
      ))}
    </div>
  );
};

export default HeroTextAnimation;

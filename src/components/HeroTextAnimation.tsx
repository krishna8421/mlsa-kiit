import { useEffect, useState } from "react";

type HeroTextAnimationProps = {
  texts: string[];
};

const HeroTextAnimation = ({ texts }: HeroTextAnimationProps) => {
  const [currentText, setCurrentText] = useState(0);
  console.log("current", currentText);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentText < texts.length - 1) {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentText, texts.length]);

  return (
    <div className={`ml-2 flex w-[150px] overflow-hidden text-[#3B61CF]`}>
      {texts.map((text, index) => (
        <span
          key={index}
          className={`w-full flex-shrink-0 duration-1000 ease-in-out transition-transform ${`-translate-x-[${currentText}00%]`}`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default HeroTextAnimation;

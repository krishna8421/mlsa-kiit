import { OUR_SPONSORS } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Sponsors() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 500,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Trigger animations when inView changes
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col m-12">
      <motion.span
        ref={ref}
        className="text-3xl font-inter font-semibold capitalize text-[20px] sm:text-[20px] font-semibold md:mb-[20px] md:text-3xl items-start text-[#FFFFFF] 2xl:text-[2.1vw] mt-[17px]"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#21FD8B] to-[#2CC4F2]">
          Sponsors
        </span>
      </motion.span>
      <motion.div
        className="flex flex-wrap justify-center mt-[20px] ml-[-37px]"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
      >
        {OUR_SPONSORS.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.site}
            target="_blank"
            rel="noopener noreferrer"
            variants={logoVariants}
          >
            <motion.img
              src={sponsor.image}
              alt={sponsor.name}
              width={180}
              height={500}
              className="grayscale-img hover:grayscale-0 max-w-full h-auto filter grayscale m-[30px]"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Sponsors;
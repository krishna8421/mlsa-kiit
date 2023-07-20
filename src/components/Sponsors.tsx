import { OUR_SPONSORS } from "@/constants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
      opacity: 5,
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
        duration: 2,
        staggerChildren: 0.25,
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
        className=" font-inter font-semibold capitalize  2xl:text-[2.1vw]  2xl:ml-[3px] text-xl md:mb-[20px] md:text-4xl items-start text-[#FFFFFF]  mt-[17px] "
        initial={{ opacity: 0, y: 0, x: 70 }}
        animate={controls}
        variants={titleVariants}
      >
        Our{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#21FD8B] to-[#2CC4F2]">
          Sponsors
        </span>
      </motion.span>
      <motion.div
        className="flex flex-wrap mt-[20px] w-full justify-start lg:justify-center  gap-8"
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
            className="w-[40%] lg:w-[300px]"
            variants={logoVariants}
          >
            <motion.img
              src={sponsor.image}
              alt={sponsor.name}
              className="grayscale-img hover:grayscale-0 max-w-full w-full h-full filter grayscale"
            />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Sponsors;
"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { TypingText, SlideShow } from "../components";
import { slideImages } from "../constants";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex">
        <div className="flex justify-start text-left items-start flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            TIME
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`${styles.heroHeading}`}>TRAVEL</h1>
          </motion.div>
        </div>
        <div className="">
          <TypingText
            title="| We know you are Skeptical, try to find out here"
            textStyles="text-left"
          />
          <motion.p
            variants={textVariant(1.1)}
            className={`${styles.p} text-[40px] bottom-0 text-left text-secondary-white`}
          >
            JOIN THE ADVENTURE <br />
            TO DISCOVER THE TRUTH
          </motion.p>
        </div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full md:mt-[40px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[100px] z-[0] -top-[30px]" />
        <div className="grid grid-cols-3 gap-4">
          {slideImages.map((slide, index) => (
            <div className="slide-container" key={index}>
              <SlideShow src={slide.images[0].src} images={slide.images} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;

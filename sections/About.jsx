"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-10" />
    <motion.div
      variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.h1
        variants={textVariant(1.1)}
        className="w-[90%] mx-auto text-[80px] font-extrabold text-secondary-white leading-[75px]"
      >
        EVERYONE THINK'S{" "}
        <span className=" text-[#1cd793]">
          IT IS POSSIBLE TO TIME TRAVEL, YOU MAY WANT TO FIND OUT BY SPINNING
        </span>{" "}
        THE BLACK HOLE
      </motion.h1>
      <div className="lg:flex cursor-pointer hover:glassmorphism hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </motion.div>
  </section>
);

export default About;

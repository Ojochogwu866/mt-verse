"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className=" flex justify-center items-center">
        <img
          src="/search.svg"
          className="w-[24px] h-[24px] object-contain"
          alt="search"
        />{" "}
        <span className=" font-extrabold text-24px leading-[30px] text-white ml-3">
          Search Era
        </span>
      </div>
      <h2 className=" font-extrabold border-b pb-1 border-hero-gradient text-24px leading-[30px] text-white">
        TRAVEL IN TIME
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;

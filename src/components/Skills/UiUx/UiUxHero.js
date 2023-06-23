import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroAnim, pagelineAnim } from "../../../Animation";

const UiUxHero = () => {
  return (
    <section className="main-section" id="uiux-section">
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <motion.div className="pageline-div" variants={pagelineAnim}></motion.div>
      <div className="hero">
        <Link to="/skillset">
          <p className="back">&larr;</p>
        </Link>
        <div className="hero-text">
          <motion.h1 variants={heroAnim}>Ui/Ux Design</motion.h1>
          <motion.p variants={heroAnim}>
            When I’m not coding, I design websites using Figma or Adobe XD. I’m
            able to collaborate with a team to create products that tell stories
            and resonate with the ideal customers.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default UiUxHero;

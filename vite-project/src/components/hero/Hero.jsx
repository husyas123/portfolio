import React from 'react'
import "./hero.css"
import { animate, motion } from 'framer-motion'


const textVariants = {
  initial:{
    x: -500,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition: {
      duration:1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y: 0,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const sliderVariants = {
  initial:{
    x: 0,
  },
  animate:{
    x: "-200%",
    transition: {
      repeatType:"mirror",
      repeat:Infinity,
      duration:20,
    },
  },
};

const Hero = () => {
  return (
      <div className="hero">
        <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} 
      initial="initial"
      animate="animate">
        <motion.h2 variants={textVariants}>HARVEY  TYLER</motion.h2>
        <motion.h1 variants={textVariants}>Web developer and Web Application</motion.h1>
        <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
     
      <motion.div className="slidingTextContainer" variants={sliderVariants}
       initial="initial"
       animate="animate">
        WELL COME
      </motion.div>
      </div>
    </div>
  )
}

export default Hero;

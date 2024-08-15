import React, { useRef } from 'react'
import "./services.css"
import { animate, motion, useInView } from 'framer-motion'

const variants = {
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
};

const Services = () => {

const ref = useRef()

const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" variants={variants} initial="initial" 
    // whileInView="animate"
    ref = {ref}
    animate={isInView  && "animate"}  
    
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I Focus on helping your brand grow
            <br/> and move farward</p>
        <hr/>
      </motion.div>
    <motion.div className="abc">
      <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="/people.webp" alt="" />
        <h1>
          <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
      </div>
      <div className="title">
        <h1>
        <motion.b whileHover={{color:"orange"}}>For Your  </motion.b> 
        Business</h1>
        <button><p2><b>What we Do?</b></p2></button>
      </div>
      </motion.div>
      </motion.div>
        {/* ener your project */}

      <motion.div className="listContainer" variants={variants} >
      <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
        <h2 className='hiding'>Branding</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis officia eaque quod expedita aspernatur eius sequi soluta blanditiis quia maxime eos, perspiciatis eligendi, obcaecati repellat fugiat nihil! Voluptatibus, possimus.</p>
        <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
      <h2 className='hiding'>Branding</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis officia eaque quod expedita aspernatur eius sequi soluta blanditiis quia maxime eos, perspiciatis eligendi, obcaecati repellat fugiat nihil! Voluptatibus, possimus.</p>
        <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
      <h2 className='hiding'>Branding</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis officia eaque quod expedita aspernatur eius sequi soluta blanditiis quia maxime eos, perspiciatis eligendi, obcaecati repellat fugiat nihil! Voluptatibus, possimus.</p>
        <button>Go</button>
      </motion.div>

      <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
      <h2 className='hiding'>Branding</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis officia eaque quod expedita aspernatur eius sequi soluta blanditiis quia maxime eos, perspiciatis eligendi, obcaecati repellat fugiat nihil! Voluptatibus, possimus.</p>
        <button>Go</button>
      </motion.div>

     
       
      </motion.div>
    </motion.div>
  )
}

export default Services;

import React, { useRef, useState } from 'react'
import "./contact.css"
import { delay, motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial:{
    y:500,
    opacity:0,
  },
  animate: {
    y: 0,
    opacity:1,
    transition:{
      duration: 0.5,
      staggerChild: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
const [error,setError] = useState(false)
const [success,setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bgwohfb', 'template_ohevaa8', formRef.current, {
        publicKey: 'l7cVtKtUZGIdTTN8R',
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };
  return (
    <motion.div ref={ref}
     className="contact" 
     variants={variants} 
     initial="initial" 
     whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work Together</motion.h1>
        <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>hussnainyaseen865@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Adress</h2>
            <span>Lahore, Pakistan</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
            <h2>Contact</h2>
            <span>+92-308-4428485</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            >  
            <input type="text" required placeholder="name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message"/>
            <button>Submit</button>
            {error && "error"}
            {success && "success"}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact;

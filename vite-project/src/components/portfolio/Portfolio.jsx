import React, { useRef } from 'react'
import "./portfolio.css"
import { motion , useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id:1,
        title:"React commerce",
        img:"https://images.pexels.com/photos/27354543/pexels-photo-27354543/free-photo-of-two-buildings-with-balconies-and-windows-in-the-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus neque distinctio nihil, magni maiores numquam dolorum, cum, perspiciatis quam quia id. Nihil sit aut, aliquid aperiam vero eveniet maxime.",

    },
    {
        id:2,
        title:"Next.js commerce",
        img:"https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?b=1&s=612x612&w=0&k=20&c=aLm7LvcUVsB1sZMMzHhfktuVTXH-tOt2kGuxuM60PL0=",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus neque distinctio nihil, magni maiores numquam dolorum, cum, perspiciatis quam quia id. Nihil sit aut, aliquid aperiam vero eveniet maxime.",

    },
    {
        id:3,
        title:"JS App",
        img:"https://media.istockphoto.com/id/1434212178/photo/middle-eastern-lady-using-laptop-working-online-sitting-in-office.jpg?b=1&s=612x612&w=0&k=20&c=-a7kN9ndCDdQEvklOFxJbmcvWOJ9sQQ8ZxvE64AsDEE=",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus neque distinctio nihil, magni maiores numquam dolorum, cum, perspiciatis quam quia id. Nihil sit aut, aliquid aperiam vero eveniet maxime.",

    },
    {
        id:4,
        title:"Music App",
        img:"https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?b=1&s=612x612&w=0&k=20&c=7znWFBgD9kdxTvTf4d81I0C8qqUFKXccnxWOFeW-2nM=",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus neque distinctio nihil, magni maiores numquam dolorum, cum, perspiciatis quam quia id. Nihil sit aut, aliquid aperiam vero eveniet maxime.",

    },
];

const Single = ({item}) =>{
    const ref = useRef()
     const {scrollYProgress} = useScroll({
        target:ref,

     });
const y = useTransform(scrollYProgress,[0, 1], [-300, 100]);

    return(
        <section>
            <div className="container">
            <div className="wrapper">
                <div className="imgcontainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    );
};


const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end" , "start start"]});

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className="portfolio" ref ={ref}>
        <div className="progress">
            <h1>Feature Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>

      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}

    </div>
  );
};

export default Portfolio;

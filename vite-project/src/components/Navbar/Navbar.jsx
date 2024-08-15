import Sidebar from "../sidebar/Sidebar"
import "./Navbar.css"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>
      <div className="wrapper">  
        <motion.span
         initial={{operator:0, scale:0.5}}
         animate={{operator:1, scale:1}}
        transition={{duration:0.5}}
        >Hussnain Dev</motion.span>
        <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

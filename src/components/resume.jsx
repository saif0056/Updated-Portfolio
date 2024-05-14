import React from 'react'
import {motion} from 'framer-motion';
import '../sass/resume.scss';
import cta from '../images/cta.png';
import scroll from '../scroll';
import GetAppIcon from '@mui/icons-material/GetApp';
import ChatIcon from '@mui/icons-material/Chat';
const Resume = () => {
  return (
    <div className="resume">
    <div className="text">
        <motion.h2 initial={{y:300}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.7 , type:"Spring" , bounce:0.4}}>Resume</motion.h2>
        <motion.h1 initial={{y:300}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.7 , type:"Spring" , bounce:0.4}}>Interested in </motion.h1>
        <motion.h1 initial={{y:300}} viewport={{once:true}} whileInView={{y:0}} transition={{duration:0.7 , type:"Spring" , bounce:0.4}}>working with me?</motion.h1>
    </div>
        <div className="body">
          <div className="left">
             <img src={cta} alt="terv" />
          </div>
          <div className="right">
          <h2>If you still have any questions,<br/> feel free to contact me. Additionally,<br/> you can download my resume below.</h2>
          <div className="buttons">
            <a download="mohd saif.pdf" href={require("../document/resume.pdf")}>
              <button><GetAppIcon/>Download CV</button>
            </a>
            <button className='btn' onClick={(e)=>scroll("contact")}><ChatIcon/> Contact Me</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Resume
import React from 'react'
import My from '../images/my.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../sass/landing.scss';
import { motion } from "framer-motion";
import scroll from '../scroll';
const Landing = () => {
  return (
    <div className="landing">
        <div className="head">
        <motion.div className="image"  initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}>
            <img src={My} alt="" />
        </motion.div>
        <div className="name"  initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
          opacity: { duration: 0.2, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}>
            <h2>Mohd Saif</h2>
        </div>
        </div>
        <div className="tagline" initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.40,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.55, type: "spring" },
        }}>
        <h1 className="h1">
            Developer Programmer
        </h1>
        {window.screen.width>913 ? (
        <p>inquisitive individual, constantly seeking out new and <br/>innovative practices to refine my skills and build cool <br/>stuff.</p>
      ) : (
        <p>inquisitive individual, constantly seeking out <br/>new and innovative practices to refine my skills <br/>and build cool stuff.</p>
      )}
              </div>
        <motion.button onClick={(e)=>scroll("Aboutme")} initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.7,
          opacity: { duration: 0.15, type: "tween" },
          y: { duration: 0.4, type: "spring" },
        }}>Find Out More <ArrowForwardIcon/></motion.button>
    </div>
  )
}

export default Landing

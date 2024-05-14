import React from "react";
import "../sass/skills.scss";
import html from "../images/html.png";
import css from "../images/css.png";
import rect from "../images/react.png";
import javascript from "../images/javascript.png";
import Java from "../images/java.png";
import clang from "../images/clang.png";
import mui from "../images/mui.png";
import express from "../images/express.png";
import spring from "../images/spring.png";
import redux from "../images/redux.png";
import framermotion from "../images/framermotion.png";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className="skills">
      <div className="text">
        <h2
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills
        </h2>
        <h1
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Everything I use to
        </h1>
        <h1
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          turn my ideas into
        </h1>
        <h1
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          reality.
        </h1>
      </div>
      <div className="body">
        <motion.div
          className="tech"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.01, type: "spring", bounce: 0.1 }}
        >
          <h1>TechStack</h1>
          <div className="boxes">
            <div className="box">
              <img src={html} alt="htnml" />
              <h2>html</h2>
            </div>
            <div className="box">
              <img src={css} alt="htnml" />
              <h2>css</h2>
            </div>
            <div className="box">
              <img src={clang} alt="htnml" />
              <h2>C</h2>
            </div>
            <div className="box">
              <img src={javascript} alt="htnml" />
              <h2>javascript</h2>
            </div>
            <div className="box">
              <img src={Java} alt="htnml" />
              <h2>Java</h2>
            </div>
          </div>
        </motion.div>
        <div className="mid">
          <motion.div
            className="framework"
            initial={{ scale: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.01, type: "spring", bounce: 0.1 }}
          >
            <h1>FrameWork</h1>
            <div className="boxes">
              <div className="box">
                <img src={express} alt="htnml" />
                <h2>Express</h2>
              </div>
              <div className="box">
                <img src={spring} alt="htnml" />
                <h2>Spring Boot</h2>
              </div>
              <div className="box">
                <img src={mui} alt="htnml" />
                <h2>MUI</h2>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="framework"
            initial={{ scale: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.01, type: "spring", bounce: 0.1 }}
          >
            <h1>Libraries</h1>
            <div className="boxes">
              <div className="box">
                <img src={rect} alt="htnml" />
                <h2>React</h2>
              </div>
              <div className="box">
                <img src={redux} alt="htnml" />
                <h2>Redux</h2>
              </div>

              <div className="box">
                <img src={framermotion} alt="htnml" />
                <h2>Framer-motion</h2>
              </div>
            </div>
          </motion.div>
        </div>
        {/* <div className="database">
            <h1>DataBases</h1>
            <div className="boxes">
           <div className="box">
              <img src={mongodb} alt="htnml" />
                <h2>Mongodb</h2>
              </div>
              </div>
           </div> */}
        {/* <div className="code">
            
           </div> */}
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import "../sass/project.scss";
import { motion } from "framer-motion";
import ecom from "../images/ecom.jpg";
import chat from "../images/chat.png";
import notes from "../images/notes.jpg";
import codeQuest from "../images/codeQuest.png";
const Project = () => {
  return (
    <div className="project">
      <div className="text">
        <motion.h2
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Project
        </motion.h2>
        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          A small preview of
        </motion.h1>
        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 150 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          my project
        </motion.h1>
      </div>

      <div className="body">
        <motion.div className="box" id="box1">
          <img src={ecom} alt="wer" />
          {document.activeElement.id === "#box1" && <></>}
        </motion.div>
        <motion.div className="box">
          <img src={chat} alt="wer" />
          {document.activeElement.id === "#box2" && <></>}
        </motion.div>
        <motion.div className="box">
          <img src={codeQuest} alt="wer" />
          {document.activeElement.id === "#box3" && <></>}
        </motion.div>
        <motion.div className="box">
          <img src={notes} alt="wer" />
          {document.activeElement.id === "#box3" && <></>}
        </motion.div>
      </div>
      <div className="show">
        <motion.a
          href="https://github.com/saif0056"
          initial={{ scale: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          show more
        </motion.a>
      </div>
    </div>
  );
};

export default Project;

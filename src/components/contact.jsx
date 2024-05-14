import React from "react";
import "../sass/contact.scss";
import { motion } from "framer-motion";
import { ReactComponent as Linkedin } from "../images/linkedin.svg";
import { ReactComponent as Whatsapp } from "../images/whatsapp.svg";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Leetcode } from "../images/leetcode.svg";
import { ReactComponent as Twitter } from "../images/twitter.svg";
const Contact = () => {
  const copy = () => {
    navigator.clipboard.writeText("jamalmohideen971@gmail.com");
  };
  return (
    <div className="contact">
      <div className="text">
        <h2>Contact</h2>
        <h1>Reach out to me</h1>
        <h3>
          Please provide your details in the form on the left, and I will
          respond to your inquiry without delay.
          <br /> You may also reach out to me on the platforms mentioned on the
          right-hand side.
        </h3>
      </div>
      <div className="body">
        <motion.div
          className="left"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <form className="form">
            <div className="upp">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your email address" />
            </div>
            <div className="down">
              <textarea
                name="para"
                placeholder="Your Meassage to me"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </form>
          <div className="submit">
            <button>Send</button>
          </div>
        </motion.div>
        <motion.div
          className="right"
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: "spring", delay: 0.25 },
          }}
        >
          <div className="up">
            <a
              href="https://www.linkedin.com/in/mohdsaifmirza/"
              className="box"
              id="linkedin"
            >
              <Linkedin className="icon" />
              <h2>LinkedIn</h2>
            </a>
            <a
              href="https://leetcode.com/u/saif0056/"
              className="box"
              id="leetcode"
            >
              <Leetcode className="icon" />
              <h2>Leetcode</h2>
            </a>
            <a href="https://github.com/saif0056" className="box" id="github">
              <Github className="icon" />
              <h2>Github</h2>
            </a>
            <a
              href="https://twitter.com/MohdSaif13570"
              className="box"
              id="twitter"
            >
              <Twitter className="icon" />
              <h2>Twitter</h2>
            </a>
            <a href="https://wa.me/+917459080056" className="box" id="whatsapp">
              <Whatsapp className="icon" />
              <h2>whatsapp</h2>
            </a>
          </div>
          <div className="button">
            <button onClick={(e) => copy()}>Connect with me</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

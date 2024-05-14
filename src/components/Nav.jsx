import React from "react";
import "../sass/Nav.scss";
import scroll from "../scroll";
const Nav = () => {
  return (
    <div className="Nav">
      <div className="circle">
        <h3>M</h3>
      </div>
      <h3 onClick={(e) => scroll("Aboutme")}>About me</h3>
      <h3 onClick={(e) => scroll("skills")}>Skills</h3>
      <h3 onClick={(e) => scroll("project")}>My works</h3>
      <h3 onClick={(e) => scroll("resume")}>Resume</h3>
      <button onClick={(e) => scroll("contact")}>Contact</button>
    </div>
  );
};

export default Nav;

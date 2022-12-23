import React from "react";
import "./intro.css";

import instagram from "../img/instagram.png";
import linkedin from "../img/linkedin.png";
import Github from "../img/github.png";
import boy from "../img/picsart.png.png";
import Vector from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hy ! I am</span>
            <span className="name">Vipin</span>
            <span style={{ color: "blue" }}>
              Frontend Developer with High level of expericence in web designing
              and development, producting the Quality works
            </span>
          </div>
          <span>
            <button className=" button i-button">Hire Me</button>
          </span>
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        <div className="i-right">
          <img src={Vector} alt="" />
          <img src={Vector2} alt="" />
          <img className="vip" src={boy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

import React from "react";
import AboutMe from "../pages/AboutMe";

import "../style/Main.css";

export default function Main() {
  return (
    <>
      <div className="bg_img_box_wrap"></div>
      <div className="bg_img_box"></div>

      <div className="main_text_bg">
        <div className="main_text_wrap">
          KIM<span>H</span>YE<span>J</span>I &nbsp; PORTFOLIO
        </div>
        <div className="under_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="main_text_line"></div>
      </div>
    </>
  );
}

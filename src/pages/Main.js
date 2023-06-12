import React, { useLayoutEffect, useState } from "react";
import {
  useSpringRef,
  animated,
  useTransition,
  useSpring,
} from "@react-spring/web";
import vg22 from "../style/images/vg_22.jpg";
import vg25 from "../style/images/vg_25.jpg";
import vg26 from "../style/images/vg_26.jpg";

import "../style/Main.css";

const IMAGES = [vg22, vg25, vg26];

export default function Main() {
  return (
    <>
      <div className="main_text-bg">
        <div>
          KIM<span>HYE</span>JI
        </div>
        <div>
          <span>PO</span>RTF<span>O</span>LIO
        </div>
      </div>

      {/* <div className="container">
        <div className="container__inner">
          <img src={vg26} />
        </div>
      </div> */}

      <div className="flex ani_bg_p">
        <div className="animated_bg animated_bg_1"></div>
        <div className="animated_bg animated_bg_2"></div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import vg1 from "../style/images/vg_1.jpg";
import vg2 from "../style/images/vg_2.jpg";
import vg11 from "../style/images/vg_11.jpg";
import vg15 from "../style/images/vg_15.jpg";
import vg26 from "../style/images/vg_26.jpg";

import "../style/Main.css";

const IMAGES = [vg1, vg11, vg15, vg26, vg2];

export default function Main() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0.7, delay: 1000 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % IMAGES.length);
      }
    },
    exitBeforeEnter: true,
  });

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

      {/* <div className="flex ani_bg_p">
        <div className="animated_bg animated_bg_1"></div>
        <div className="animated_bg animated_bg_2"></div>
      </div> */}

      {/* <div className="flex fill center">
        {transitions((style, i) => (
          <animated.div
            className="bg"
            style={{
              ...style,
              backgroundImage: `url(${IMAGES[i]}`,
            }}
          />
        ))}
      </div> */}
      {/* <div className="bg_content"></div> */}
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import vg22 from "../style/images/vg_22.jpg";
import vg25 from "../style/images/vg_25.jpg";
import vg26 from "../style/images/vg_26.jpg";

import "../style/Main.css";

const IMAGES = [vg22, vg25, vg26];

const slides = [
  "photo-1544511916-0148ccdeb877",
  "photo-1544572571-ab94fd872ce4",
  "reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG",
  "photo-1540206395-68808572332f",
];

export default function Main() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 2000 },
    config: { duration: 2000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });

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

      {/* <div className="flex ani_bg_p">
        <div className="animated_bg animated_bg_1"></div>
        <div className="animated_bg animated_bg_2"></div>
      </div> */}

      <div className="flex fill center">
        {transitions((style, i) => (
          <animated.div
            className="bg"
            style={{
              ...style,
              backgroundImage: `url(${IMAGES[i]}`,
            }}
          />
        ))}
      </div>
    </>
  );
}

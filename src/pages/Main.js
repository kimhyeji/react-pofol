import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import vg1 from "../style/images/vg_1.jpg";
import vg2 from "../style/images/vg_2.jpg";
import vg22 from "../style/images/vg_22.jpg";
import vg25 from "../style/images/vg_25.jpg";
import vg26 from "../style/images/vg_26.jpg";

import "../style/Main.css";

const IMAGES = [vg1, vg22, vg25, vg26, vg2];

export default function Main() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0.3, delay: 1000 },
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
      <div className="main_text_bg">
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

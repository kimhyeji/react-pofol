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
import vg4 from "../style/images/vg_4.jpg";

import styles from "../style/Main.css";
import "../style/Main.css";

const IMAGES = [vg22, vg25, vg26];

export default function Main() {
  const [activeIndex, setActiveIndex] = useState(0);
  const springApi = useSpringRef();

  const transitions = useTransition(activeIndex, {
    from: {
      clipPath: "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
    },
    enter: {
      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
    },
    leave: {
      clipPath: "polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)",
    },
    onRest: (_springs, _ctrl, item) => {
      if (activeIndex === item) {
        setActiveIndex(activeIndex === IMAGES.length - 1 ? 0 : activeIndex + 1);
      }
    },
    exitBeforeEnter: true,
    config: {
      duration: 3000,
    },
    delay: 1000,
    ref: springApi,
  });

  const springs = useSpring({
    from: {
      strokeDashoffset: 120,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 1000,
    },
    loop: true,
    ref: springApi,
  });

  useLayoutEffect(() => {
    springApi.start();
  }, [activeIndex]);

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

      <div className="line_y" />
      <div className="line_w" />

      <div className="container">
        <div className="container__inner">
          {transitions((springs, item) => (
            <animated.div className="img__container" style={springs}>
              <img src={IMAGES[item]} />
            </animated.div>
          ))}
        </div>
      </div>

      {/* <div className="flex ani_bg_p">
        <div className="animated_bg animated_bg_1"></div>
        <div className="animated_bg animated_bg_2"></div>
      </div> */}
    </>
  );
}

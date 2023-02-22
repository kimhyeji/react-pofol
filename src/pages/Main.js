import React from "react";
import { Timeline, Tween } from "react-gsap";

import "../style/Main.css";

export default function Main() {
  return (
    <>
      <h1>Main</h1>
      <div>
        <h2>react-gsap Animation</h2>
        <div className="wrap">
          <Timeline target={<div className="box">!</div>}>
            <Tween from={{ opacity: 1 }} to={{ opacity: 1 }} duration={1} />
            <Tween to={{ x: "200px" }} />
          </Timeline>
        </div>
      </div>
    </>
  );
}

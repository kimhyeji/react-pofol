import React from "react";
import { gsap, TargetWithNames } from "gsap";

import { Tween, Timeline } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "../style/Main.css";

function LoremDiv() {
  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nam
        laborum nisi natus obcaecati, quod deserunt modi error iure ex non.
        Libero odio iure voluptate perferendis consectetur. Necessitatibus,
        pariatur non! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Culpa, nam laborum nisi natus obcaecati, quod deserunt modi error iure
        ex non. Libero odio iure voluptate perferendis consectetur.
        Necessitatibus, pariatur non! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Culpa, nam laborum nisi natus obcaecati, quod deserunt
        modi error iure ex non. Libero odio iure voluptate perferendis
        consectetur. Necessitatibus, pariatur non! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Culpa, nam laborum nisi natus obcaecati,
        quod deserunt modi error iure ex non. Libero odio iure voluptate
        perferendis consectetur. Necessitatibus, pariatur non! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Culpa, nam laborum nisi natus
        obcaecati, quod deserunt modi error iure ex non. Libero odio iure
        voluptate perferendis consectetur. Necessitatibus, pariatur non! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Culpa, nam laborum
        nisi natus obcaecati, quod deserunt modi error iure ex non. Libero odio
        iure voluptate perferendis consectetur. Necessitatibus, pariatur non!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nam
        laborum nisi natus obcaecati, quod deserunt modi error iure ex non.
        Libero odio iure voluptate perferendis consectetur. Necessitatibus,
        pariatur non!
      </div>
    </>
  );
}

export default function Main() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <h1>Main</h1>
      <LoremDiv />
      <LoremDiv />
      <div>
        <Tween
          to={{
            x: "300px",
            scrollTrigger: {
              trigger: ".square",
              start: "-200px center",
              end: "200px center",
              scrub: 0.5,
              markers: true,
            },
          }}
        >
          <div
            className="square"
            style={{ width: "100px", height: "100px", background: "#ccc" }}
          />
        </Tween>
      </div>
      <LoremDiv />
      <LoremDiv />
    </>
  );
}

import React from "react";
import vg1 from "../style/images/vg_1.jpg";
import vg2 from "../style/images/vg_2.jpg";
import vg3 from "../style/images/vg_3.jpg";
import vg4 from "../style/images/vg_4.jpg";

import "../style/Main.css";

export default function Main() {
  return (
    <>
      <div className="flex ani_bg_p">
        <div className="animated_bg animated_bg_1"></div>
        <div className="animated_bg animated_bg_2"></div>
      </div>

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
    </>
  );
}

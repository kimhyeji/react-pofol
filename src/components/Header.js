import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <div className="he_wrap">
        <div className="he_content_wrap logo_wrap">
          <NavLink to="/main">
            H\
            <span>J</span>
          </NavLink>
        </div>

        <div className="he_content_wrap menu_wrap">
          <div onClick={handleClick} className="button_wrap">
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </>
  );
}

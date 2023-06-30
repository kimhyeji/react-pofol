import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Slide } from "react-burger-menu";

import {
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import "../style/Header.css";

export default function Header() {
  const [state, setState] = useState({ right: false });
  // 버튼 클릭시 햄버거 메뉴
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

          <div className="side_bar">
            <div className="side_bar_text_wrap">
              <NavLink className="side_text" to="/main">
                <span>MAIN</span>
              </NavLink>
              <NavLink className="side_text" to="/project">
                <span>PROJECT</span>
              </NavLink>
              <NavLink className="side_text" to="/aboutMe">
                <span>ABOUT ME</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { NavLink } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  return (
    <>
      <div className="he_wrap">
        <div className="logo_wrap bg-red-500">
          <NavLink to="/main">
            H\
            <span>J</span>
          </NavLink>
        </div>

        <div className="menu_wrap bg-blue-500">
          <div className="he_line_1" />
          <div className="he_line_2" />
        </div>
      </div>
    </>
  );
}

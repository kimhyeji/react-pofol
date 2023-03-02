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
          {/* <div className="button_wrap">
            <span></span>
            <span></span>
          </div> */}
          <input className="burger-check" type="checkbox" id="burger-check" />
          <label className="burger-icon" for="burger-check">
            <span className="burger-sticks"></span>
          </label>
          <div className="menu">
            <div style={{ width: "200px;" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

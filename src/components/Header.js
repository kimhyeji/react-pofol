import { NavLink } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
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
          <div className="button_wrap">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

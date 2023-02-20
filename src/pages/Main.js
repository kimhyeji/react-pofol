import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <>
      <h1>Main</h1>

      <NavLink to="/aboutMe">AboutMe</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/project">Project</NavLink>
    </>
  );
}

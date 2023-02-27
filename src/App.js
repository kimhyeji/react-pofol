import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";

import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";
import GsapEx from "./GsapEx";

import "./style/App.css";

export default function App() {
  return (
    <>
      {/* <FullPage
        scrollMode={"full-page"}
        controls
        controlsProps={{ className: "slide-navigation" }}
      >
        <Slide className="">
          <Main className="bs_line" />
        </Slide>
        <Slide className="">
          <Project className="bs_line" />
        </Slide>
        <Slide className="">
          <AboutMe className="bs_line" />
        </Slide>
      </FullPage> */}

      <NavLink to="/main">Main</NavLink>
      <NavLink to="/aboutMe">AboutMe</NavLink>
      <NavLink to="/project">Project</NavLink>

      {/* <div className="bs_line" /> */}

      <Routes>
        <Route path="/gsapEx" element={<GsapEx />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/main" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

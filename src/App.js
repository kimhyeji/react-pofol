import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";

import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide className="section-common section-area1">
          <Main />
        </Slide>
        <Slide className="section-common section-area2">
          <Skills />
        </Slide>
        <Slide className="section-common section-area3">
          <Project />
        </Slide>
        <Slide className="section-common section-area4">
          <AboutMe />
        </Slide>
      </FullPage>

      {/* <NavLink to="/main">Main</NavLink>
      <NavLink to="/aboutMe">AboutMe</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/project">Project</NavLink>
      */}

      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/main" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

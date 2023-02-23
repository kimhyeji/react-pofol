import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";
import { SectionsContainer, Section } from "react-fullpage";

import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      {/* <FullPage
        scrollMode={"full-page"}
        controls
        controlsProps={{ className: "slide-navigation" }}
      >
        <Slide className="section-area1">
          <Main />
        </Slide>
        <Slide className="section-area3">
          <Project />
        </Slide>
        <Slide className="section-area4">
          <AboutMe />
        </Slide>
      </FullPage> */}
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/aboutMe">AboutMe</NavLink>
      <NavLink to="/project">Project</NavLink>

      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/main" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

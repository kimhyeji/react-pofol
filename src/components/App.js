import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import { FullPage, Slide } from "react-full-page";

import AboutMe from "../pages/AboutMe";
import Main from "../pages/Main";
import Project from "../pages/Project";

import "../style/App.css";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/main" element={<Main />} />
        <Route path="/project" element={<Project />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

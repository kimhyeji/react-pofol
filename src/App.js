import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

export default function App() {
  return (
    <>
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

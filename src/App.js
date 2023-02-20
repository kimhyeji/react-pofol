import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

function MainPage() {
  return (
    <>
      <h1>메인 페이지</h1>
    </>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

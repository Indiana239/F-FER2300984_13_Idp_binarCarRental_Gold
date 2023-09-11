import React from "react";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<div>No route found</div>} />
    </Routes>
  );
}

export default App;

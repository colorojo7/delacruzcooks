import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//** PAGES **//
import LandingPage from "../pages/LandingPage";
import RecipePage from "../pages/RecipePage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/recipe/:id" element={<RecipePage/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

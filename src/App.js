import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";

const App = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/project/:name" element={<ProjectInfo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

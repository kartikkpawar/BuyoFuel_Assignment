import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          {/* protected route for dashboard and projects */}

          <Route
            exact
            path="/project/:name"
            element={
              <ProtectedRoute>
                <ProjectInfo />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Open Routes */}
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

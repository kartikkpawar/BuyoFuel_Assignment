import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProjectInfo from "./pages/ProjectInfo";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./utils/ProtectedRoutes";
import { isProjStrageInitialized } from "./localStorageHelper";

const App = () => {
  isProjStrageInitialized();
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          {/* Setting default route to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          {/* protected route for dashboard and projects */}

          <Route
            exact
            path="/project/:id"
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

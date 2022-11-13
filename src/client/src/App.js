import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import GlobalNav from "./components/GlobalNav";
import Login from "./pages/LoginPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import Register from "./pages/LoginPage/Register";
import { routes } from "./AllRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={
                <ProtectedRoute>
                  <GlobalNav>{route.component}</GlobalNav>
                </ProtectedRoute>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

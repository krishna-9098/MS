import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/login/Login";
import SignUp from "../components/Auth/sign_up/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import Users from "../screens/users/Users";
import Admin from "../screens/admin/Admin";

export default function Routing() {
  return (
    <BrowserRouter>
      <div>
        <Dashboard />
        <div className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

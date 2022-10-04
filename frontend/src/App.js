import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ProtectedPage from "./pages/protectedRoute";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<ProtectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

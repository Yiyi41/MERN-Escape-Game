import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Room from "./pages/Room";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room" element={<Room />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Room from "./pages/Room";

import "./App.css";

function App() {
    const [user, setUser] = useState(0);

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/room" element={<Room />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

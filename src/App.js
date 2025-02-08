import './App.css';
import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import MensGrooming from "./Pages/MensGrooming";
import CartPage from "./Pages/CartPage";
import OrderConfirm from "./Pages/OrderConfirm";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
            <Box>
                {!isHomePage && <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/MensGrooming" element={<MensGrooming />} />
                    <Route path="/CartPage" element={<CartPage />} />
                    <Route path="/OrderConfirm" element={<OrderConfirm />} />
                </Routes>
                {!isHomePage && <Footer />}
            </Box>
    );
}

export default App;
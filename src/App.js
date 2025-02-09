import './App.css';
import React from "react";
import {Box, useDisclosure} from "@chakra-ui/react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import CartPage from "./Pages/CartPage";
import OrderConfirm from "./Pages/OrderConfirm";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
            <>
                {!isHomePage && <Navbar />}
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/carts" element={<CartPage />} />
                    <Route path="/bookings" element={<OrderConfirm />} />
                </Routes>
                {!isHomePage && <Footer />}
            </>
    );
}

export default App;
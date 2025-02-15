import './App.css';
import React, {useEffect, useState} from "react";
import {Box, useDisclosure} from "@chakra-ui/react";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import CartPage from "./Pages/CartPage";
import OrderConfirm from "./Pages/OrderConfirm";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Cookies from "js-cookie";
import Login from "./Components/Modals/Login";
import NotFound from "./Components/NotFound";
import MobileNavbar from "./Layouts/MobileNavbar";
import AboutUs from "./Pages/Aboutus";
import ScreenLoader from "./Components/Loaders/ScreenLoader";
import ScreenLoadingBar from "./Components/Loaders/ScreenLoadingBar";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <ScreenLoadingBar />;
    }
    return (
            <>
                {!isHomePage && <Navbar />}
                <Box as="main" pt={!isHomePage ? "75px" : "0"}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/carts" element={<PrivateRoute element={<CartPage />} />} />
                    <Route path="/bookings" element={<PrivateRoute element={<OrderConfirm />} />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
                <MobileNavbar />
                {!isHomePage && <Footer />}
            </>
    );
}


const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!Cookies.get("authToken") ;
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};


export default App;
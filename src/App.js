import './App.css';
import React, {useEffect} from "react";
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

function App() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    return (
            <>
                {!isHomePage && <Navbar />}
                <Box as="main" pt={!isHomePage ? "60px" : "0"}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/carts" element={<PrivateRoute element={<CartPage />} />} />
                    <Route path="/bookings" element={<PrivateRoute element={<OrderConfirm />} />} />
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
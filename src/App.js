import React, {useEffect, useState} from "react";
import {Box, useDisclosure} from "@chakra-ui/react";
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
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
import InstallAppButton from "./Components/InstallApp/InstallAppButton";
import AllServices from "./Pages/AllServices";
import Testimonials from "./Components/Testmonial/Testimonial";
import {sampleTestimonials} from "./Utils/Database";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <ScreenLoadingBar />;
    }
    return (
            <div id="root">
                {!isHomePage && <Navbar />}
                <Box as="main" pt={!isHomePage ? "75px" : "0px"}>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/services" element={<AllServices />} />
                    <Route path={"/services/:id"} element={<Service/>} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/carts" element={<PrivateRoute element={<CartPage />} />} />
                    <Route exact path="/bookings" element={<PrivateRoute element={<OrderConfirm />} />} />
                    <Route exact path="/about-us" element={<AboutUs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Box>
                <MobileNavbar />
                {!isHomePage && <Footer />}

            </div>
    );
}


const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!Cookies.get("authToken") ;
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};


export default App;
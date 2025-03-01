import React, {useEffect, useRef, useState} from "react";
import {Box, Button, Icon, useDisclosure} from "@chakra-ui/react";
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
import InstallAppButton from "./Components/InstallApp/InstallAppNotification";
import AllServices from "./Pages/AllServices";
import Testimonials from "./Components/Testmonial/Testimonial";
import {sampleTestimonials} from "./Utils/Database";
import FloatingButtons from "./Components/Common/FloatingButtons";
import {DownloadIcon} from "@chakra-ui/icons";
import InstallAppNotification from "./Components/InstallApp/InstallAppNotification";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const isHomePage = location.pathname === "/";
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const checkIfInstalled = () => {
            if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
                setIsInstalled(true);
            }
        };
        checkIfInstalled();
    }, []);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            onOpen();
        });
    }, [onOpen]);


    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);


    if (loading) {
        return <ScreenLoadingBar />;
    }


    return (
            <Box height={"100dvh"}>
                {!isInstalled && isOpen && <InstallAppNotification deferredPrompt={deferredPrompt} onClose={onClose} />}

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
                <FloatingButtons />
                <MobileNavbar />
                {!isHomePage && <Footer />}

            </Box>
    );
}


const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!Cookies.get("authToken") ;
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export const registerServiceWorker = () => {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/serviceWorker.js")
                .then((registration) => {
                    console.log("Service Worker registered:", registration);
                })
                .catch((error) => {
                    console.log("Service Worker registration failed:", error);
                });
        });
    }
};

export default App;
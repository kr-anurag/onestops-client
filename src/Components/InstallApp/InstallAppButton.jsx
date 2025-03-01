import React, { useState, useEffect } from "react";
import { Button, Icon } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const InstallAppButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        // Check if the app is already installed
        const checkInstalled = () => {
            if (
                window.matchMedia("(display-mode: standalone)").matches || // Modern browsers
                window.navigator.standalone // Safari iOS
            ) {
                setIsInstalled(true);
            }
        };

        checkInstalled();
        window.addEventListener("appinstalled", checkInstalled);

        return () => window.removeEventListener("appinstalled", checkInstalled);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            console.log("beforeinstallprompt event fired");
            setDeferredPrompt(e);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) {
            console.log("❌ Deferred prompt is not available - Make sure PWA criteria are met");
            return;
        }

        deferredPrompt.prompt();

        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === "accepted") {
            console.log("✅ App installed successfully");
            setIsInstalled(true); // Hide button after installation
        } else {
            console.log("❌ App installation canceled");
        }

        setDeferredPrompt(null);
    };

    if (isInstalled) return null;

    return (
        <Button
            leftIcon={<Icon as={DownloadIcon} />}
            onClick={handleInstallClick}
            colorScheme="blue"
            bgGradient="linear(to-r, blue.400, blue.600)"
            color="white"
            size="md"
            borderRadius="full"
            fontSize={{base: "0.8rem", md: "0.9rem"}}
            _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
            _active={{ transform: "scale(0.98)" }}
        >
            Install App
        </Button>
    );
};

export default InstallAppButton;

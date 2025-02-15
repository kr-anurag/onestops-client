import React, { useState, useEffect } from "react";

const InstallAppButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("App installed successfully");
                } else {
                    console.log("App installation canceled");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <button
            onClick={handleInstallClick}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                background: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
            }}
        >
            Download App
        </button>
    );
};

export default InstallAppButton;

import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Box, Icon, Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import {useEffect} from "react";

const InstallAppNotification = ({ deferredPrompt, onClose }) => {
    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the install prompt");
                }
                deferredPrompt = null;
            });
        }
    };


    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <Alert
            status="info"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            position="fixed"
            bottom="0"
            width="100%"
            display={{ base: "flex", md: "none" }}
            zIndex="1000"
            borderRadius="lg"
            p={4}
        >
            <Box>
                <AlertTitle mt={4} mb={1} fontSize="md">
                    Install Our App
                </AlertTitle>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <AlertDescription maxWidth="sm">
                        Get our app for a better experience.
                    </AlertDescription>
                    <Button
                        leftIcon={<Icon as={DownloadIcon} />}
                        onClick={handleInstall}
                        colorScheme="blue"
                        bgGradient="linear(to-r, blue.400, blue.600)"
                        color="white"
                        size="sm"
                        borderRadius="full"
                        fontSize={{ base: "0.8rem", md: "0.9rem" }}
                        _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                        _active={{ transform: "scale(0.98)" }}
                        mt={4}
                        mb={2}
                    >
                        Install Now
                    </Button>
                </Box>
            </Box>
            <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
        </Alert>
    );
};

export default InstallAppNotification;
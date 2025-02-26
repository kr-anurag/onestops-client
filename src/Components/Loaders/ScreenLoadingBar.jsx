import React, { useEffect, useState } from "react";
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import logo from "../../assests/onestop-logo.png";


const ScreenLoadingBar = () => {
    const [progress, setProgress] = useState(0);
    // const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    // setTimeout(() => setVisible(false), 300);
                    return 100;
                }
            });
        }, 10);

        return () => clearInterval(interval);
    }, []);

    // if (!visible) return null;

    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            width="100%"
            height="100dvh"
            justifyContent="center"
            alignItems="center"
            // bg="rgba(0, 0, 0, 0.8)"
            zIndex="9999"
            flexDirection="column"
            bg={"#F5F5F5"}
        >
            <Image
                h={{base: "80px", md: "90px", lg:"100px"}}
                w={{base: "80px", md: "90px", lg:"100px"}}
                src={logo}
            />
            <Box width="80%" maxWidth="250px" bg="gray.200" borderRadius="md" overflow="hidden" mt="1.5rem">
                <Box
                    width={`${progress}%`}
                    height="0.4rem"
                    bg="blue.500"
                    transition="width 0.5s ease"
                />
            </Box>
            {/*<Text mt={4} fontSize="lg" fontWeight="bold">*/}
            {/*    Loading... {progress}%*/}
            {/*</Text>*/}
        </Flex>
    );
};

export default ScreenLoadingBar;
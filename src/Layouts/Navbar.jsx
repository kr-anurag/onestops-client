import {
    Box,
    Button,
    Divider,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
    Spacer,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
        <Flex p="10px 10px">
            <Box
                display={"flex"}
                alignItems="center"
                fontWeight="semibold"
            >
                <Button ref={btnRef} onClick={onOpen} bg="transparent" _hover={{ bg: "transparent" }}>
                    <HamburgerIcon w={6} h={6} color="black" />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <Sidebar />
                </Drawer>
                <Text fontSize={{base: "1.4rem", lg:"1.8rem"}} fontWeight="bold">
                    OneStop.in
                </Text>
                <Box fontSize={"13px"} ml="1rem">
                    <Text>Mumbai</Text>
                </Box>
            </Box>
            <Spacer />
        </Flex>
        <Divider  borderColor={"blackAlpha.500"} />
        </>
    )

}
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
    const navigate = useNavigate();
    const goToHomePage = () => [
        navigate("/")
    ]

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
        <Flex p="10px 30px">
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
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody display="flex" flexDirection="column">
                            <Sidebar />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Text fontSize="28px" fontWeight="bold">
                    OneStop.in
                </Text>
                <Box fontSize={"15px"} ml="1rem">
                    <Text>Mumbai</Text>
                </Box>
            </Box>
            <Spacer />
            <Flex alignItems={"center"} gap="1rem" fontWeight={"semibold"}>
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/carts"}>Cart </NavLink>
                <NavLink to={"/bookings"}>Bookings </NavLink>
            </Flex>
        </Flex>
        <Divider m="10px 0" borderColor={"blackAlpha.500"} />
        </>
    )

}
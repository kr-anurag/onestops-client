import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Appcontext } from "../Context/Appcontext";
import {NavLink, useLocation} from "react-router-dom";
import { FaHome, FaServicestack, FaShoppingCart, FaClipboardList } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const menuItems = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Services", path: "/services", icon: FaServicestack },
    { name: "Cart", path: "/carts", icon: FaShoppingCart },
    { name: "Bookings", path: "/bookings", icon: FaClipboardList },
];

export default function Sidebar() {
    const { user, handleLogin, handleLogout } = useContext(Appcontext);
    const location = useLocation();

    return (
        <Flex direction="column" justify="space-between" height="100%" p="10px">
            <Box>
                {menuItems.map((item) => (
                    <NavLink to={item.path} key={item.name}>
                        <Flex align="center" gap="10px" p="10px"  _hover={{ bg: "#f5f5f5" }}
                              bg={location.pathname === item.path ? "#f5f5f5" : "transparent"}
                        >
                            <item.icon size={22}/>
                            <Text fontSize="lg" fontWeight="600">{item.name}</Text>
                        </Flex>
                        <Divider />
                    </NavLink>
                ))}
            </Box>
            <Box mb={"20px"}>
                <Flex direction="column" gap={"20px"} >
                    <Divider />
                <Box >
                    {user && (
                        <Flex gap="1rem" alignItems={"center"}>
                            <Image src={user.picture} w="40px" h="40px" borderRadius="50%" />
                                <Text textAlign="center" fontWeight={"600"}>
                                    {user.name}
                                </Text>
                        </Flex>
                    )}</Box>
                <Box>
                    {!user ? (
                        <Button onClick={handleLogin} w={"full"} leftIcon={<FcGoogle />}>
                            Sign in with Google
                        </Button>
                    ) : (
                        <Button onClick={handleLogout} w={"full"}>Logout</Button>
                    )}
                </Box>
                </Flex>
            </Box>
        </Flex>
    );
}
import {Box, Divider, Flex, Image, Spacer, Text} from "@chakra-ui/react";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";

export default function Navbar() {
    const navigate = useNavigate();
    const goToHomePage = () => [
        navigate("/")
    ]
    return (
        <>
        <Flex p="10px 30px">
            <Box
                display={"flex"}
                alignItems="center"
                gap="1rem"
                fontWeight="semibold"
            >
                <Image
                    onClick={goToHomePage}
                    h="40px"
                    w="40px"
                    src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463875565-a4ce06.svg"
                />
                <Box fontSize={"15px"}>
                    <Text>One Stop Shop</Text>
                    <Text>Mumbai</Text>
                </Box>
            </Box>
            <Spacer />
            <Flex alignItems={"center"} gap="1rem" fontWeight={"semibold"}>
                <NavLink to={"/"}>Home </NavLink>
                <NavLink to={"/CartPage"}>Cart </NavLink>
                <NavLink to={"/bookings"}>Bookings </NavLink>
            </Flex>
        </Flex>
        <Divider m="10px 0" borderColor={"blackAlpha.500"} />
        </>
    )

}
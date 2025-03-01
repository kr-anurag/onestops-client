import React from 'react'
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {FaHome, FaShoppingCart, FaClipboardList} from "react-icons/fa";
import { MdMiscellaneousServices} from "react-icons/md";


function MobileNavbar() {
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: FaHome, path: "/" },
    { name: "Services", icon: MdMiscellaneousServices, path: "/services" },
    { name: "Cart", icon: FaShoppingCart, path: "/carts" },
    { name: "Bookings", icon: FaClipboardList, path: "/bookings" }
  ];

  return (
      <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="white"
          boxShadow="md"
          borderTop="1px solid #E2E8F0"
          display={{ base: "flex", md: "none" }}
          justifyContent="space-around"
          py={3}
          px={1}
          zIndex={"999"}
          overflowX={"hidden"}
      >
        {menuItems.map((item) => (
            <Link to={item.path} key={item.name} _focus={{ outline: "none" }}>
              <Flex
                  flexDirection="column"
                  alignItems="center"
                  color={location.pathname === item.path ? "blue.500" : "gray.600"}
                  _focus={{ outline: "none" }}

              >
                <Icon as={item.icon} boxSize={5} />
                <Text fontSize="0.8rem" mt={1}>{item.name}</Text>
              </Flex>
            </Link>
        ))}
      </Box>
  );
}

export default MobileNavbar
import React, { useContext } from "react";
import {
  Box,
  Image,
  Flex,
  Spacer,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { Appcontext } from "../Context/Appcontext";
import Sidebar from "./Sidebar";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "./../assests/logo-white.png"


const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {user} = useContext(Appcontext);

  return (
    <>
      <Flex h="60px" justifyContent="center">
        <Flex w="1300px" mt="10px" mx="1rem">
          <Box  display={"flex"} alignItems="center">
            <Button ref={btnRef} onClick={onOpen} bg="transparent" _hover={{ bg: "transparent" }}>
              <HamburgerIcon w={6} h={6} color="white" />
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
            <Image
                h={{base: "40px", md: "50px", lg:"50px"}}
                w={{base: "40px", md: "50px", lg:"50px"}}
                src={logo}
            />
            <Text
                color="#fff"
                fontSize={{base: "2xl", md: "3xl"}}
                fontWeight={"800"}
                ml={"0.3rem"}
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">OneStops.in
            </Text>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center" gap="2rem">
              <Box
                fontSize="14px"
                fontWeight="700"
                color="#fff"
              >
                {user ?
                    <Image src={user.picture} w="40px" h="40px" borderRadius="50%" onClick={onOpen} /> :
                    <Link to="/login"> Login / Sign Up </Link>}
              </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeHeader;

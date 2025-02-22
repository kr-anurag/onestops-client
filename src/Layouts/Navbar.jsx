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
import {Link, NavLink, useNavigate} from "react-router-dom";
import React from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import logo from "./../assests/onestop-logo.png"
import {MdLocationOn} from "react-icons/md";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bg="white"
            boxShadow="md"
            borderBottom="1px solid #E2E8F0"
            zIndex={"999"}
        >
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
                <Box>
                    <Image
                        h={{base: "40px", md: "50px", lg:"60px"}}
                        w={{base: "40px", md: "50px", lg:"60px"}}
                        src={logo}
                    />
                </Box>
                <Box fontSize={"13px"} ml="0.8rem" display="flex" alignItems="center">
                    <MdLocationOn />
                    <Text ml="0.2rem">Mumbai</Text>
                </Box>
            </Box>
            <Spacer />
            {/*<Box*/}
            {/*    display="flex"*/}
            {/*    alignItems="center"*/}
            {/*    gap="1rem"*/}
            {/*    fontSize="14px"*/}
            {/*    fontWeight="700"*/}
            {/*    mr={"1rem"}*/}
            {/*>*/}
            {/*    <Link to="/"> Home </Link>*/}
            {/*    <Link to="/services"> Services </Link>*/}
            {/*    <Link to="/login"> Login </Link>*/}
            {/*</Box>*/}
        </Flex>
        {/*<Divider  borderColor={"blackAlpha.500"} />*/}
        </Box>
    )

}
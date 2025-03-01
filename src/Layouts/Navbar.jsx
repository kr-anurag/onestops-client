import {
    Box,
    Button,
    Divider,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerHeader,
    DrawerOverlay,
    Flex, Icon,
    Image,
    Spacer,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {HamburgerIcon, LockIcon} from "@chakra-ui/icons";
import Sidebar from "./Sidebar";
import logo from "./../assests/onestop-logo.png"
import {MdLocationOn, MdMiscellaneousServices} from "react-icons/md";
import {Appcontext} from "../Context/Appcontext";
import {FaClipboardList, FaHome, FaInfoCircle, FaShoppingCart} from "react-icons/fa";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const {user} = useContext(Appcontext);
    const location = useLocation();

    const menuItems = [
        { name: "Home", path: "/", icon: FaHome },
        { name: "Services", path: "/services", icon: MdMiscellaneousServices },
        { name: "Cart", path: "/carts", icon: FaShoppingCart },
        { name: "Bookings", path: "/bookings", icon: FaClipboardList },
    ];

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
                    <Link to={"/#"}>
                    <Image
                        h={{base: "40px", md: "50px", lg:"60px"}}
                        w={{base: "40px", md: "50px", lg:"60px"}}
                        src={logo}
                    />
                    </Link>
                </Box>
                <Box fontSize={"13px"} ml="0.8rem" display="flex" alignItems="center">
                    <MdLocationOn />
                    <Text ml="0.2rem">Mumbai</Text>
                </Box>
            </Box>
            <Spacer />
            <Box
                display={{base: "none", md: "flex"}}
                alignItems="center"
                gap="0.1rem"
                fontSize="16px"
                fontWeight="500"
                mr={"2rem"}
            >
                {
                    menuItems.map(
                        (m)=>{
                            return (
                                <NavLink
                                    key={m.name}
                                    to={m.path}
                                    style={({ isActive }) => ({
                                        background: isActive && "#f2f4f6",
                                        minWidth: "80px",
                                        padding: "6px 18px",
                                        borderRadius: "1rem",
                                        textAlign: "center",
                                        textDecoration: "none",
                                    })}
                                >
                                    {m.name}
                                </NavLink>
                            )
                        }
                    )
                }
                {user ?
                    <Image src={user.picture} w="40px" h="40px" ml="1.5rem" borderRadius="50%" onClick={onOpen} /> :
                    <Button  leftIcon={<Icon as={LockIcon} />}
                             borderRadius="2rem"
                             fontSize={{base: "0.8rem", md: "0.9rem"}}
                             bgGradient="linear(to-r, blue.400, blue.600)"
                             color="white"
                             _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                             _active={{ transform: "scale(0.98)" }}>
                        <Link to="/login"> Login </Link>
                    </Button>}
            </Box>
        </Flex>
        </Box>
    )

}
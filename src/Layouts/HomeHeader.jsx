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
  Text, Icon,
} from "@chakra-ui/react";
import { Appcontext } from "../Context/Appcontext";
import Sidebar from "./Sidebar";
import {HamburgerIcon, LockIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "./../assests/logo-white.png"
import {MdLocationOn} from "react-icons/md";


const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {user} = useContext(Appcontext);

  return (
    <>
      <Flex h="60px" justifyContent="center" color="#fff">
        <Flex w="1300px" mt="10px" mx="0.8rem" >
          <Box  display={"flex"} alignItems="center">
            <Button ref={btnRef} onClick={onOpen} bg="transparent" _hover={{ bg: "transparent" }}>
              <HamburgerIcon w={{base: 6, md: 6}} h={{base: 6, md: 6}}  color="#fff"/>
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
            <Box display="flex" alignItems="flex-start"
                 lineHeight={1.3}
                 justifyContent="center" flexDirection="column"
                 ml={"0.7rem"}>
              <Text
                  fontSize={{base: "xl", md: "3xl"}}
                  fontWeight={"700"}
                  fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">onestop's
              </Text>
              <Box display="flex" alignItems="center" gap={"0.2rem"}>
                <MdLocationOn />
                <Text  fontSize="12px">
                 Mumbai
                </Text>
              </Box>
            </Box>

          </Box>
          <Spacer />
          <Box display="flex" alignItems="center"  gap={"0.8rem"} fontSize="14px"
               fontWeight="700"
               color="#fff">
                {user ?
                    <Image src={user.picture} w="40px" h="40px" borderRadius="50%" onClick={onOpen} /> :
                    <Link to="/login"> <Button  leftIcon={<Icon as={LockIcon} />}
                                                borderRadius="2rem"
                                                fontSize={{base: "0.8rem", md: "0.9rem"}}
                                                _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                                                _active={{ transform: "scale(0.98)" }}
                    >Login </Button> </Link>}
              </Box>

        </Flex>
      </Flex>
    </>
  );
};

export default HomeHeader;

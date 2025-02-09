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
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  Text,
} from "@chakra-ui/react";
import { Appcontext } from "../Context/Appcontext";
import Sidebar from "./Sidebar";
import { HamburgerIcon } from "@chakra-ui/icons";

const HomeHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {user} = useContext(Appcontext);

  console.log(user)
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
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody display="flex" flexDirection="column">
                  <Sidebar />
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <Text
                color="#fff"
                fontSize={{base: "2xl", md: "4xl"}}
                fontWeight={"800"}
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif">OneStops.in</Text>
          </Box>
          <Spacer />
          <Box display="flex" alignItems="center" gap="2rem">
              <Box
                as="button"
                ref={btnRef}
                onClick={onOpen}
                fontSize="14px"
                fontWeight="700"
                color="#fff"
              >
                {user ? <Image src={user.picture} w="40px" h="40px" borderRadius="50%"/> : "Login / Sign Up"}
              </Box>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeHeader;

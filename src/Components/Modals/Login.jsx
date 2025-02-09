import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalHeader,
  Box,
} from "@chakra-ui/react";
import { Appcontext } from "../../Context/Appcontext";
import Cookies from "js-cookie";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const { handleLogin, user } = useContext(Appcontext);


  return (
      <>
        <Button
            onClick={onOpen}
            size="md"
            color="white"
            height="48px"
            variant="solid"
            bg="#6e42e5"
            px="40px"
            _hover={{ bg: "#6e42e5" }}
        >
          Login/Sign up to proceed
        </Button>
        <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Box textAlign="center">
                <Button onClick={handleLogin} w={"full"} leftIcon={<FcGoogle />}>
                  Sign in with Google
                </Button>
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
  );
};

export default Login;
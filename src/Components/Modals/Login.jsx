import React, {useContext, useEffect} from "react";
import {Box, Button, Container, Heading, Text, useDisclosure, VStack} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Appcontext } from "../../Context/Appcontext";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const { handleLogin, user } = useContext(Appcontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);


  return (
      <Container centerContent minH="50dvh" display="flex" justifyContent="center">
        <Box
            bg="white"
            p={8}
            boxShadow="lg"
            borderRadius="lg"
            textAlign="center"
            maxW="md"
        >
          <Heading size="lg" mb={4} color="gray.700">
            Welcome Back
          </Heading>
          <Text fontSize="md" color="gray.500" mb={6}>
            Sign in to continue
          </Text>
          <Button
              leftIcon={<FcGoogle size={24} />}
              onClick={handleLogin}
              colorScheme="gray"
              variant="outline"
              w="full"
              py={6}
              fontSize="md"
              _hover={{ bg: "gray.50" }}
          >
            Sign in with Google
          </Button>

          <Text fontSize="sm" color="gray.500" mt={6}>
            By signing in, you agree to our{" "}
            <Text as="a" href="/terms" color="blue.500" fontWeight="medium" _hover={{ textDecoration: "underline" }}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text as="a" href="/privacy" color="blue.500" fontWeight="medium" _hover={{ textDecoration: "underline" }}>
              Privacy Policy
            </Text>.
          </Text>
        </Box>
      </Container>
  );
};

export default Login;
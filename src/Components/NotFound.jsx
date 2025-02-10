import { Box, Button, Container, Heading, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import  NotFoundImage from "../assests/not-found.png"

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container centerContent minH="70dvh" display="flex" justifyContent="center">
            <Box textAlign="center">
                <Image
                    src={NotFoundImage}
                    alt="404 Not Found"
                    borderRadius="lg"

                />
                <Heading size="xl" color="gray.700" mb={4}>
                    404 - Page Not Found
                </Heading>
                <Text fontSize="lg" color="gray.500" mb={6}>
                    The page you are looking for doesn’t exist or has been moved.
                </Text>
                <Button
                    colorScheme="blue"
                    onClick={() => navigate("/")}
                    size={{base: "md", md: "lg"}}
                    mb={12}
                >
                    Go to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;

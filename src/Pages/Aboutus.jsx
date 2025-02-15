import React from "react";
import { Box, Container, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const AboutUs = () => {
    return (
        <Box bg="gray.50" py={10} minH={"50vh"}>
            <Container maxW="6xl">
                <Heading as="h1" size="xl" mb={6} textAlign="center">
                    About Us
                </Heading>
                <Text fontSize="lg" mb={6} textAlign="center">
                    We are a company dedicated to providing the best home services on demand.
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>
                            Our Mission
                        </Heading>
                        <Text fontSize="md" mb={4}>
                            Our mission is to make your life easier by connecting you with top-rated professionals for all your home service needs. We strive to provide a seamless and efficient experience, ensuring that you can find the right help quickly and easily. Our team is dedicated to maintaining high standards of service and customer satisfaction.
                        </Text>
                    </Box>
                    <Box>
                        <Heading as="h2" size="lg" mb={4}>
                            Our Values
                        </Heading>
                        <Text fontSize="md">
                            We value quality, reliability, and customer satisfaction. Our team is committed to delivering exceptional service every time. We believe in building long-term relationships with our customers based on trust and transparency. Our values guide us in every decision we make, ensuring that we always put our customers first.
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default AboutUs;
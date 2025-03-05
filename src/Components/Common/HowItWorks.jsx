import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaSearch, FaCalendarAlt, FaCheckCircle, FaVideo } from "react-icons/fa";

const steps = [
    {
        icon: FaSearch,
        title: "Choose Your Service",
        description: "Browse through our services and select what you need",
    },
    {
        icon: FaVideo,
        title: "Consult Our Expert",
        description: "Consult our expert on video call from Home",
    },
    {
        icon: FaCalendarAlt,
        title: "Book Appointment",
        description: "Choose your preferred time and date",
    },
    {
        icon: FaCheckCircle,
        title: "Get Service",
        description: "Our professional will arrive and complete the service",
    },
];

const HowItWorks = () => {
    return (
        <Box py={{ base: "10", md: "20" }} bg="#f2f4f6">
            <Box maxW="1200px" mx="auto" px={{ base: "2", md: "4" }}>
                <Heading as="h2" textAlign="center" mb={{ base: "2", md: "4" }} fontSize={{ base: "2xl", md: "var(--font-size-title)" }} fontWeight="700" color="#212121">
                    How It Works
                </Heading>
                <Text fontSize={{ base: "sm", md: "var(--font-size-normal)" }} color="gray.600" textAlign="center" mb={{ base: "6", md: "12" }}>
                    Book your service in just a few simple steps
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={{ base: "6", md: "8" }}>
                    {steps.map((step, index) => (
                        <Flex key={index} direction="column" align="center" textAlign="center">
                            <Flex
                                w={{ base: "12", md: "20" }}
                                h={{ base: "12", md: "20" }}
                                bg="blue.100"
                                rounded="full"
                                align="center"
                                justify="center"
                                mb={{ base: "4", md: "6" }}
                            >
                                <Icon as={step.icon} boxSize={{ base: "5", md: "10" }} color="blue.600" />
                            </Flex>
                            <Heading as="h3" size="md" mb={{ base: "2", md: "4" }} fontSize={{ base: "md", md: "lg" }}>
                                {index + 1}. {step.title}
                            </Heading>
                            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                                {step.description}
                            </Text>
                        </Flex>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default HowItWorks;
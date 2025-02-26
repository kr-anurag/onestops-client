import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import React from "react";

const HowItWorks = () => {
    return (
        <Box py="20" bg="#f2f4f6">
            <Box maxW={"1100px"}  mx="auto" px="4">
                <Heading as="h2" textAlign="center" mb="4"  fontSize={{ base: "24px", md: "32px" }}
                         fontWeight="700"
                         color="#212121" >
                    How It Works
                </Heading>
                <Text  fontSize={{ base: "16px", md: "20px" }} color="gray.600" textAlign="center" mb="12">
                    Book your service in just a few simple steps
                </Text>
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="8">
                    <Flex direction="column" align="center" textAlign="center">
                        <Flex
                            w="20"
                            h="20"
                            bg="blue.100"
                            rounded="full"
                            align="center"
                            justify="center"
                            mb="6"
                        >
                            <Icon as={FaSearch} boxSize="10" color="blue.600" />
                        </Flex>
                        <Heading as="h3" size="md" mb="4">
                            1. Choose Your Service
                        </Heading>
                        <Text color="gray.600">
                            Browse through our services and select what you need
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" textAlign="center">
                        <Flex
                            w="20"
                            h="20"
                            bg="blue.100"
                            rounded="full"
                            align="center"
                            justify="center"
                            mb="6"
                        >
                            <Icon as={FaCalendarAlt} boxSize="10" color="blue.600" />
                        </Flex>
                        <Heading as="h3" size="md" mb="4">
                            2. Book Appointment
                        </Heading>
                        <Text color="gray.600">
                            Choose your preferred time and date
                        </Text>
                    </Flex>
                    <Flex direction="column" align="center" textAlign="center">
                        <Flex
                            w="20"
                            h="20"
                            bg="blue.100"
                            rounded="full"
                            align="center"
                            justify="center"
                            mb="6"
                        >
                            <Icon as={FaCheckCircle} boxSize="10" color="blue.600" />
                        </Flex>
                        <Heading as="h3" size="md" mb="4">
                            3. Get Service
                        </Heading>
                        <Text color="gray.600">
                            Our professional will arrive and complete the service
                        </Text>
                    </Flex>
                </Grid>
            </Box>
        </Box>
    );
};

export default HowItWorks;
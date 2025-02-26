import { Box, Grid, Text, VStack } from "@chakra-ui/react";

const Statistics = () => {
    return (
        <Box py="20" bg="#f2f4f6">
            <Box maxW="1100px" mx="auto" px="4">
                <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap="8" textAlign="center">
                    <VStack>
                        <Text fontSize="4xl" fontWeight="bold" color="blue.600" mb="2">1K+</Text>
                        <Text color="gray.600">Completed Services</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="4xl" fontWeight="bold" color="blue.600" mb="2">4.8</Text>
                        <Text color="gray.600">Average Rating</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="4xl" fontWeight="bold" color="blue.600" mb="2">150+</Text>
                        <Text color="gray.600">Verified Professionals</Text>
                    </VStack>
                    <VStack>
                        <Text fontSize="4xl" fontWeight="bold" color="blue.600" mb="2">24/7</Text>
                        <Text color="gray.600">Customer Support</Text>
                    </VStack>
                </Grid>
            </Box>
        </Box>
    );
};

export default Statistics;
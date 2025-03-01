import React from "react";
import { Box, Text, VStack, HStack, Avatar, StackDivider, Flex, useBreakpointValue } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Testimonial = ({ name, rating, text, avatar }) => {
    const avatarSize = useBreakpointValue({ base: "md", md: "lg" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <Box p={5} shadow="lg" borderWidth="1px" borderRadius="lg" bg="white" _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        flexGrow={1}>
            <VStack spacing={4} align="stretch">
                <HStack spacing={4}>
                    <Avatar name={name} src={avatar} size={avatarSize} />
                    <VStack align="start">
                        <Text fontWeight="bold" fontSize="var(--font-size-normal)">{name}</Text>
                        <HStack>
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} color={i < rating ? "yellow.400" : "gray.300"} />
                            ))}
                        </HStack>
                    </VStack>
                </HStack>
                <Text fontSize={textSize} color="gray.600">{text}</Text>
            </VStack>
        </Box>
    );
};

const Testimonials = ({ testimonials }) => {
    return (
        <Box bg="white" pb={16} pt={16}>
            <Box maxW={"1100px"} mx={"auto"} p={4} mb={4} >
                <Text
                    fontSize="var(--font-size-title)"
                    fontWeight="700"
                    color="#212121"
                    textAlign="center"
                    mb={4}
                >
                    Customer Reviews
                </Text>
                <Text fontSize="var(--font-size-normal)" color="gray.600" textAlign="center" mb="12">
                    See what our customers say about our services
                </Text>
            <Flex
                gap={"1.5rem"}
                flexWrap={"wrap"}
                spacing={8}
                borderRadius="lg"
                w="full"
            >
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial}/>
                ))}
            </Flex>
            </Box>
        </Box>
    );
};

export default Testimonials;
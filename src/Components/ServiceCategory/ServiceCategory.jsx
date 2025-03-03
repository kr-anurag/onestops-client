import React from "react";
import {Box, Text, Image, Flex, Grid} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ServiceCategory = ({ title, services, }) => {
    const navigate = useNavigate();

    const handleServiceClick = (path) => {
        navigate(`/services/${path}`);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            p={{ base: "10px 0 40px", md: "10px 0 60px" }}
            gap="3rem"
            maxW={"1100px"}
            mx={"auto"}
        >
            <Box>
                <Text
                    fontSize="var(--font-size-title)"
                    fontWeight="700"
                    color="#212121"
                    textAlign="center"
                    mb={4}
                >
                    {title}
                </Text>
                <Text  fontSize="var(--font-size-normal)" color="gray.600" textAlign="center">
                    {`Explore our wide range of ${title.toLowerCase()} services`}
                </Text>
            </Box>
            <Flex justifyContent="center" gap="2rem" flexWrap="wrap" px={6}>
                <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(auto-fill, minmax(250px, 1fr))" }}
                    gap="2rem"
                    w="100%"
                >
                    {services.map((service) => (
                        <Box
                            key={service.title}
                            onClick={() => handleServiceClick(service.path)}
                            cursor="pointer"
                            position="relative"
                        >
                            <Image
                                mb="20px"
                                transition="transform 0.4s"
                                _hover={{ transform: "scale(1.05)" }}
                                rounded="lg"
                                h={{ base: "auto", md: "180px" }}
                                w="100%"
                                src={service.img}
                            />
                            <Text
                                width="100%"
                                textAlign="center"
                                fontSize="14px"
                                fontWeight="500"
                                px="10px"
                            >
                                {service.title}
                            </Text>
                        </Box>
                    ))}
                </Grid>
            </Flex>
        </Box>
    );
};

export default ServiceCategory;
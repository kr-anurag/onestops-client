import React from "react";
import {Box, Text, Image, Grid} from "@chakra-ui/react";
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
            p={{ base: "10px 0 60px" }}
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
                    mb={2}
                >
                    {title}
                </Text>
                <Text  fontSize="var(--font-size-normal)" color="gray.600" textAlign="center">
                    {`Explore our wide range of ${title.toLowerCase()} services`}
                </Text>
            </Box>
            <Box px={6}>
                <Grid
                    templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(auto-fill, minmax(250px, 1fr))" }}
                    gap={{base: "1rem", md: "2rem"}}
                    w="100%"
                >
                    {services.map((service) => (
                        <Box
                            key={service.title}
                            onClick={() => handleServiceClick(service.path)}
                            cursor="pointer"
                            position="relative"
                        >
                            {service.tag && <Box
                                position="absolute"
                                top="10px"
                                right="10px"
                                bg="red.500"
                                color="white"
                                px="8px"
                                py="2px"
                                rounded="md"
                                fontSize={{base: "10px", md: "12px"}}
                                fontWeight="bold"
                                zIndex="999"
                            >
                                {service.tag}
                            </Box>}
                            <Box position="relative">
                                <Box
                                    position="relative"
                                    transition="transform 0.4s"
                                    _hover={{ transform: "scale(1.05)" }}
                                >
                                    <Image
                                        rounded="lg"
                                        w="100%"
                                        src={service.img}
                                        aspectRatio={{ base: "4/3", md: "3/2" }}
                                    />
                                    <Box
                                        position="absolute"
                                        bottom="0"
                                        left="0"
                                        right="0"
                                        height="30%"
                                        bg="linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))"
                                        roundedBottom="lg"
                                    />
                                </Box>
                                    <Text
                                        position="absolute"
                                        bottom="5px"
                                        left="5px"
                                        width="100%"
                                        fontSize={{base: "14px", md: "16px"}}
                                        fontWeight="800"
                                        color="white"
                                        px="10px"
                                        py="5px"
                                        rounded="md"
                                    >
                                        {service.title}
                                    </Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ServiceCategory;
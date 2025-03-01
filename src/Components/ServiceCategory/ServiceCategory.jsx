import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
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
            maxW={"1200px"}
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
            <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
                {services.map((service) => (
                    <Box
                        key={service.title}
                        w={{ base: "100%", md: "auto" }}
                        onClick={() => handleServiceClick(service.path)}
                        cursor="pointer"
                    >
                        <Box px={{ base: "20px", md: "0px" }}>
                            <Image
                                mb="20px"
                                transition="transform 0.4s"
                                _hover={{ transform: "scale(1.05)" }}
                                rounded="lg"
                                h={{ base: "220px", md: "180px" }}
                                w={{ base: "100%", md: "300px" }}
                                src={service.img}
                            />
                        </Box>
                        <Text
                            textAlign="center"
                            fontSize="14px"
                            color="#212121"
                            fontWeight="500"
                        >
                            {service.title}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default ServiceCategory;
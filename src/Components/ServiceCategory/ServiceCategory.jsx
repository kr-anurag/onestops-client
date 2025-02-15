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
            borderBottom="16px solid #f2f4f6"
            p={{ base: "20px 0 40px", md: "50px 0 70px" }}
            gap="3rem"
        >
            <Text
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="700"
                color="#212121"
                textAlign="center"
            >
                {title}
            </Text>
            <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
                {services.map((service) => (
                    <Box
                        key={service.title}
                        w={{ base: "100%", md: "auto" }}
                        onClick={() => handleServiceClick(service.path)}
                        cursor="pointer"
                    >
                        <Box>
                            <Image
                                mb="20px"
                                transition="transform 0.4s"
                                _hover={{ transform: "scale(1.10)" }}
                                rounded="md"
                                h={{ base: "220px", md: "180px" }}
                                w={{ base: "100%", md: "300px" }}
                                px={{ base: "20px", md: "0px" }}
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
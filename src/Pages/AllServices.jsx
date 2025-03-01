import React, { useState, useEffect } from "react";
import ServiceCategory from "../Components/ServiceCategory/ServiceCategory";
import { cleaningServices, homeRepairServices } from "../Utils/Database";
import OnDemandService from "../Components/ServiceCategory/OnDemandService";
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import demandImage from "./../assests/ondemand.png";

const AllServices = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredServices, setFilteredServices] = useState(homeRepairServices);

    useEffect(() => {
        setFilteredServices(
            homeRepairServices.filter((service) =>
                service.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery]);

    return (
        <Box mt={{base: "1.5rem", md: "2rem"}}>
            <Box px={"1rem"}>
                <InputGroup mb="1rem" maxW="600px" mx="auto">
                    <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
                    <Input
                        type="text"
                        placeholder="Search for services"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </InputGroup>
            </Box>

            {filteredServices.length > 0 ? (
                <ServiceCategory title="Our Services" services={filteredServices} />
            ) : (
                <Box textAlign="center" my="20px">
                    <Text fontSize={{base: "md", md: "xl"}} color="gray.500">
                        {`No services found with ${searchQuery}`}
                    </Text>
                </Box>
            )}
            <Box maxW={"1200px"} mx={"auto"}>
                <Flex direction={{ base: "column", md: "row" }} align="center">
                    <Image
                        src={demandImage}
                        alt="Service Image"
                        boxSize={{ base: "100%", md: "50%" }}
                        objectFit="cover"
                        width={{ base: "100%", md: "55%" }}
                    />
                    <Box flex="1" ml={{ md: "20px" }} mt={{ base: "20px", md: "0" }} p={{ base: "1rem", md: "1.5rem" }}>
                        <OnDemandService />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default AllServices;
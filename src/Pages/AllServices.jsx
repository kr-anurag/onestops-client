import React from "react";
import ServiceCategory from "../Components/ServiceCategory/ServiceCategory";
import {cleaningServices, homeRepairServices} from "../Utils/Database";
import OnDemandService from "../Components/ServiceCategory/OnDemandService";
import {Box, Flex, Image} from "@chakra-ui/react";
import demandImage from "./../assests/ondemand.png"
const AllServices = () => {
    return (
        <>
            <ServiceCategory title="Our Services" services={homeRepairServices} />
            <Box maxW={"1200px"} mx={"auto"}  >
                <Flex direction={{ base: "column", md: "row" }} align="center">
                    <Image
                        src={demandImage}
                        alt="Service Image"
                        boxSize={{ base: "100%", md: "50%" }}
                        objectFit="cover"
                        width={{ base: "100%", md: "55%" }}
                    />
                    <Box flex="1" ml={{ md: "20px" }} mt={{ base: "20px", md: "0" }} p={{base: "1rem", md: "1.5rem"}}>
                        <OnDemandService />
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default AllServices;
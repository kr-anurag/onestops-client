import React, { useState } from "react";
import {Box, Textarea, Button, Heading, Icon} from "@chakra-ui/react";
import {FaTools, FaWhatsapp} from "react-icons/fa";
import {RiCustomerService2Line} from "react-icons/ri";

const OnDemandService = () => {
    const [request, setRequest] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (e) => {
        const value = e.target.value;
        setRequest(value);
        setIsDisabled(value.trim().split(/\s+/).length < 5);
    };

    const handleSubmit = () => {
        const encodedRequest = encodeURIComponent(request);
        window.open(`https://wa.me/7039619954?text=${encodedRequest}`);
    };

    return (
        <Box>
            <Heading as="h3" size="md" mb="10px">
                <Icon as={RiCustomerService2Line} mr="5px"/>
                On Demand Service
            </Heading>
            <Textarea
                placeholder="Type your service request here... (min 5 words)"
                value={request}
                onChange={handleChange}
                height="150px"
                mb="10px"
            />
            <Button
                leftIcon={<FaWhatsapp />}
                colorScheme="green"
                onClick={handleSubmit}
                isDisabled={isDisabled}
            >
                Submit Request via WhatsApp
            </Button>
        </Box>
    );
};

export default OnDemandService;
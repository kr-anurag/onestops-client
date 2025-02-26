import { Box, Button, Icon } from "@chakra-ui/react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
const buttons = [
    {
        bg: "green.500",
        hoverBg: "green.600",
        icon: FaWhatsapp,
        onClick:() => window.open(`https://wa.me/7039619954?text=I%20am%20interested%20in%20the%20service`),
    },
    {
        bg: "blue.600",
        hoverBg: "blue.700",
        icon: FaPhoneAlt,
        onClick: () => window.open(`tel:+917039619954`),
    },
    {
        bg: "gray.700",
        hoverBg: "gray.800",
        icon: FaArrowUp,
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
];

const FloatingButtons = () => (
    <Box position="fixed" bottom="8" right="8" display={{base: "none", md:"flex"}} flexDirection="column" gap={2}>
        {buttons.map((button, index) => (
            <Button
                key={index}
                rounded="full"
                w="12"
                h="12"
                bg={button.bg}
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                shadow="lg"
                _hover={{ bg: button.hoverBg }}
                onClick={button.onClick}
            >
                <Icon as={button.icon} boxSize="6" />
            </Button>
        ))}
    </Box>
);

export default FloatingButtons;
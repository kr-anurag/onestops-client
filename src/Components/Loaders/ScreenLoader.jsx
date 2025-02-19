import React from "react";
import { Box, Spinner, Flex, Text } from "@chakra-ui/react";
import "./ScreenLoader.css";

const ScreenLoader = () => {
  return (
      <Flex
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex="9999"
          flexDirection="column"
      >
        <Box className="loader">
          <Box className="dot" />
          <Box className="dot" />
          <Box className="dot" />
        </Box>
        <Text color="white" mt={4} fontSize="lg" fontWeight="bold">
          Loading...
        </Text>
      </Flex>)
};

export default ScreenLoader;
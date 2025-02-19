import {Box, Container, Image, Link, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import React from "react";


export default function Footer() {
    const ListHeader = ({ children }) => {
        return (
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
                {children}
            </Text>
        );
    };
  return (
          <Box bg={"#f5f5f5"} color={useColorModeValue("gray.700", "gray.200")}>
              <Box px={5} pt={5}>
                  <Text fontSize="28px" fontWeight="bold">
                      OneStops.in
                  </Text>
              </Box>
              <Container as={Stack} maxW={"6xl"} py={10}>
                  <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                      <Stack align={"flex-start"}>
                          <ListHeader>Company</ListHeader>
                          <Link href={"#"}>About Us</Link>
                          <Link href={"#"}>Terms & Conditions</Link>
                          <Link href={"#"}>Privacy Policy</Link>
                      </Stack>
                      <Stack align={"flex-start"}>
                          <ListHeader>For Customers</ListHeader>
                          <Link href={"#"}>Categories near you</Link>
                          <Link href={"#"}>Contact Us</Link>
                      </Stack>
                      <Stack align={"flex-start"}>
                          <ListHeader>For Partners</ListHeader>
                          <Link href={"#"}>Register as a professional</Link>
                      </Stack>

                      <Box align={"flex-start"}>
                          <ListHeader>Install App</ListHeader>
                          <Stack direction={"row"} spacing={6} mb="20px" mt="20px">
                              <FaTwitter />
                              <FaFacebook />
                              <FaInstagram />
                              <FaLinkedin />
                          </Stack>
                          <Image
                              h="36px"
                              w="108px"
                              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463870745-38fece.png"
                          />
                          <Image
                              h="36px"
                              w="108px"
                              mt="20px"
                              src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/supply/customer-app-supply/1648463880397-b2cc52.svg"
                          />
                      </Box>
                  </SimpleGrid>
              </Container>

              <Box
                  borderTopWidth={1}
                  borderStyle={"solid"}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                  <Container
                      as={Stack}
                      maxW={"6xl"}
                      py={4}
                      direction={{ base: "column", md: "row" }}
                      spacing={4}
                      justify={{ md: "space-between" }}
                      align={{ md: "center" }}
                  >
                      <Text>
                          © Copyright 2022 OS Company. All rights reserved.
                      </Text>
                  </Container>
              </Box>
          </Box>
  );
}

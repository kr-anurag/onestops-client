import React from "react";
import {
  Box,
  Flex,
  Wrap,
  Text,
  WrapItem,
  Divider,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const HomeFooter = () => {
  const city = [
    "Mumbai",
    "Kalyan",
    "Nashik",
  ];
  return (
    <Flex justifyContent={"center"} bg="#000" color="#cbcbcb">
      <Flex w="1300px" p="30px 0px" flexDirection={"column"} gap="1rem">
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
          <WrapItem>About Us</WrapItem>
          <WrapItem>Terms & Conditions</WrapItem>
          <WrapItem>Privacy Policy</WrapItem>
          <WrapItem>Contact Us</WrapItem>
        </Wrap>
        <Divider orientation="horizontal" color="gray" size="4px" />
        <Text fontSize="18px" color="#fffff7" fontWeight="semibold">
          Serving In
        </Text>
        <Text fontSize="16px" color="#bfbfbf" fontWeight="bolder">
          IND
        </Text>
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
          {city.map((city,i) => (
            <WrapItem key={i}>{city}</WrapItem>
          ))}
        </Wrap>
        <Divider orientation="horizontal" />
        <Flex justifyContent={"space-between"}>
          <Box display="flex" alignItems="center" gap="1rem">
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
              alt="ucLogo"
              h="50"
              w="150"
            />
            <Text fontSize="12px">
              © 2024-25 One Stop Shop India Pvt. Ltd
            </Text>
          </Box>
          <Flex alignItems="center" gap=".5rem">
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/twitter.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded="md">
              <Image src="https://img.icons8.com/ios/2x/facebook.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/instagram.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/youtube.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/linkedin.png" />
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
              <Image src="https://img.icons8.com/ios/2x/pinterest.png" />
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Image
                h="50px"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
              />
            </Box>
            <Box>
              <Image
                h="50"
                w="150px"
                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeFooter;

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
import {Link} from "react-router-dom";

const HomeFooter = () => {
  const city = [
    "Mumbai",
    "Kalyan",
  ];
  return (
    <Flex justifyContent={"center"} bg="#000" color="#cbcbcb">
      <Flex w="1300px" p="30px 0px" flexDirection={"column"} gap="1rem" px={{base:"1rem", md:"0px"}}>
        <Wrap spacingX={7} fontWeight="semibold" color="#888">
         <Link to={"/about-us"}> <WrapItem>About Us</WrapItem></Link>
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
        <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap={"1rem"}>
          <Box display="flex" alignItems="center" gap="1rem" flexWrap={"wrap"}>
            <Text fontSize="24px" color="#fffff7" fontWeight="semibold">
              OneStop.in
            </Text>
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

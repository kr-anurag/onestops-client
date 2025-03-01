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
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const HomeFooter = () => {
  const city = [
    "South Mumbai",
    "Navi Mumbai",
    "Western Suburbs",
    "Central Mumbai",
    "Thane",
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
          MUMBAI
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
              onestops.co.in
            </Text>
            <Text fontSize="12px">
              © 2024-25 One Stop Shop India Pvt. Ltd
            </Text>
          </Box>
          <Flex alignItems="center" gap=".5rem">
            <SocialMediaIcons size={24}/>
          </Flex>
          {/*<Flex>*/}
          {/*  <Box>*/}
          {/*    <Image*/}
          {/*      h="50px"*/}
          {/*      w="150px"*/}
          {/*      src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"*/}
          {/*    />*/}
          {/*  </Box>*/}
          {/*  <Box>*/}
          {/*    <Image*/}
          {/*      h="50"*/}
          {/*      w="150px"*/}
          {/*      src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"*/}
          {/*    />*/}
          {/*  </Box>*/}
          {/*</Flex>*/}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeFooter;

export const SocialMediaIcons = ({size}) => {
  const iconSize = size+"px" || "24px";
  const socialMedia = [
    { icon: <FaFacebook size={iconSize} />, url: "https://www.facebook.com/profile.php?id=61570912250470" },
    { icon: <FaTwitter size={iconSize} />, url: "https://x.com/OneStops007" },
    { icon: <FaInstagram size={iconSize} />, url: "https://www.instagram.com/onestop_youronesolution2024?igsh=MW5uZGMydndvMG9pYw%3D%3D&utm_source=qr" },
    { icon: <FaYoutube size={iconSize} />, url: "https://youtube.com/@onestop-yos?si=_j0qZ_OZHj5HTBFJ" },
  ];

  return (
      <Flex alignItems="center" gap="0.5rem">
        {socialMedia.map((media, index) => (
            <Link key={index} isExternal target="_blank" to={media.url}>
              <Box
                  h="40px"
                  w="40px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.2s"
                  _hover={{ transform: "translateY(-5px)" }}
                  borderRadius={"50%"}
              >
                {media.icon}
              </Box>
            </Link>
        ))}
      </Flex>
  );
};

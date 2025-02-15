import React, { useContext } from "react";
import {
  Box,
  Text,
  Input,
  Image,
  InputGroup,
  InputLeftElement,
  Button,
  SimpleGrid,
  Flex,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton, useBreakpointValue,
} from "@chakra-ui/react";
import HomeHeader from "../Layouts/HomeHeader";
import { TriangleDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Appcontext } from "../Context/Appcontext";
import HomeFooter from "../Layouts/HomeFooter";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Swiper/Carousel";
import { keyframes } from "@emotion/react";

const services = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    title: "Salon For Women",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    title: "Salon For Men",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    title: "AC/Appliance Repair",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    title: "Cleaning & Pest Control",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
    title: "Electricians",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    title: "Plumbers & Carpenters",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const moveToMG = () => {
    navigate("/services");
  };

  const SearchBar = () => (
      <Box
          display="flex"
          gap="1rem"
          m="20px auto"
          w={{ base: "90%", md: "fit-content" }}
          p="10px"
          flexDirection={{ base: "column", md: "row" }}
      >
        <Popover>
          <PopoverTrigger>
            <Button
                display="flex"
                justifyContent="space-between"
                w={{base : "120px", md: "180px"}}
                h={{base : "40px", md: "54px"}}
            >
              Mumbai <TriangleDownIcon fontSize="sm" />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Current Location</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Input placeholder="Search for Society/Apartment" />
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <InputGroup>
          <InputLeftElement
              h={{base : "40px", md: "54px"}}
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
          />
          <Input
              h={{base : "40px", md: "54px"}}
              w={{ base: "100%", md: "572px" }}
              bg="white"
              type="text"
              placeholder="Search For Services"
          />
        </InputGroup>
      </Box>
  );

  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

  return (
      <>
        <Box
            h={"552px"}
            bgImage="url('https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgSize="cover"
        >
          <HomeHeader />
          <Box textAlign="center" mt={{ base: "100px", md: "190px" }}>
            <Text
                color="#fff"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="600"
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
                animation={`${fadeIn} 1.5s ease-in-out`}
            >
              Endless possibilities, just one request away.
            </Text>
          </Box>
          <SearchBar />
        </Box>
        <Box >
          <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
              spacing={5}
              w={{ base: "90%", lg: "1000px"}}
              m="-70px auto 0"
              p="24px"
              rounded="md"
              bg="white"
              boxShadow="xl"
          >
            {services.map((el) => (
                <Box
                    key={el.title}
                    bg="white"
                    w="128px"
                    h="112px"
                    rounded="md"
                    p="10px"
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    _hover={{ bg: "#e5e5e5" }}
                    onClick={moveToMG}
                >
                  <Box w="fit-content" alignSelf="center">
                    <Image h="32px" w="32px" src={el.img} alt="myImage" />
                  </Box>
                  <Box
                      textAlign="center"
                      lineHeight="16px"
                      h="40px"
                      fontSize="16px"
                      color="#212121"
                  >
                    {el.title}
                  </Box>
                </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box p="20px 0 64px" mt="70px">
          <Carousel />
        </Box>
        <CleaningAndPestControl />
        <HomeRepairs />
        <HomeFooter />
      </>
  );
};


export default Home;


const CleaningAndPestControl = () => {
  const cleaningServices = [
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg",
      title: "Bathroom & Kitchen Cleaning",
    },
    {
      img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg",
      title: "Sofa & Carpet Cleaning",
    },
  ];

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
          Cleaning & Pest Control
        </Text>
        <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
          {cleaningServices.map((service) => (
              <Box key={service.title} w={{ base: "100%", md: "auto" }}>
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

const homeRepairServices = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
    title: "Home Furniture",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg",
    title: "Carpenters",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/electrician.jpg",
    title: "Electricians",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg",
    title: "Plumbers",
  },
];

const HomeRepairs = () => {
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
          Home Repairs
        </Text>
        <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
          {homeRepairServices.map((service) => (
              <Box key={service.title} w={{ base: "100%", md: "auto" }}>
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
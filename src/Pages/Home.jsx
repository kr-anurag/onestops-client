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
import HomeFooter from "../Layouts/HomeFooter";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Swiper/Carousel";
import { keyframes } from "@emotion/react";
import ServiceCategory from "../Components/ServiceCategory/ServiceCategory";
import {cleaningServices, homeRepairServices, sampleTestimonials} from "../Utils/Database";
import Testimonials from "../Components/Testmonial/Testimonial";
import bannerImage from "./../assests/banner.webp"

const topServices = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    title: "Salon For Women",
    path: "salon-for-women",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    title: "Salon For Men",
    path: "salon-for-men",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    title: "AC/Appliance Repair",
    path: "ac-appliance-repair",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    title: "Cleaning & Pest Control",
    path: "cleaning-pest-control",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
    title: "Electricians",
    path: "electrician-services",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    title: "Plumbers & Carpenters",
    path: "plumbers-carpenters",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const moveToMG = (id) => {
    navigate(`/services/${id}`);
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
              placeholder="Search For Service"
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
            h={"598px"}
            bgImage={bannerImage}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgSize="cover"
        >
          <HomeHeader />
          <Box textAlign="center" mt={{ base: "125px", md: "250px" }}>
            <Text
                color="#fff"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="800"
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
                animation={`${fadeIn} 1.5s ease-in-out`}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.9)"
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
            {topServices?.map((el) => (
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
                    onClick={() => moveToMG(el?.path)}
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
          <Carousel images={imgArr}/>
        </Box>
        <ServiceCategory title="Home Repairs" services={homeRepairServices} />
        <ServiceCategory title="Cleaning & Pest Control" services={cleaningServices} />

        <Testimonials testimonials={sampleTestimonials} />
        <HomeFooter />
      </>
  );
};

const imgArr = [
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657006546486-545754.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733512041-813a4c.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733511465-f22ed1.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505075-80d1ba.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/luminosity/1657733505585-4d3fe3.jpeg",
];

export default Home;



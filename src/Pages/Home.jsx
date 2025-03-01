import React, { useState, useEffect } from "react";
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
  PopoverCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TriangleDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../Layouts/HomeHeader";
import HomeFooter from "../Layouts/HomeFooter";
import Carousel from "../Components/Swiper/Carousel";
import ServiceCategory from "../Components/ServiceCategory/ServiceCategory";
import Testimonials from "../Components/Testmonial/Testimonial";
import HowItWorks from "../Components/Common/HowItWorks";
import Statistics from "../Components/Common/Statistics";
import { cleaningServices, homeRepairServices, sampleTestimonials } from "../Utils/Database";
import {keyframes} from "@emotion/react";

const topServices = [
  {
    img: "https://ik.imagekit.io/ulyn7697x/electrician%20(1).png?updatedAt=1740831155688",
    title: "Electricians",
    path: "electrician-services",
  },
  {
    img: "https://ik.imagekit.io/ulyn7697x/technician.png?updatedAt=1740853791687",
    title: "Appliance Repair",
    path: "appliance-services",
  },
  {
    img: "https://ik.imagekit.io/ulyn7697x/woman.png?updatedAt=1740831155914",
    title: "Carpenters",
    path: "carpenter-services",
  },
  {
    img: "https://ik.imagekit.io/ulyn7697x/plumber%20(1).png?updatedAt=1740853653226",
    title: "Plumbers",
    path: "plumber-services",
  },
  {
    img: "https://ik.imagekit.io/ulyn7697x/painter%20(1).png?updatedAt=1740831438506",
    title: "Painters",
    path: "painting-services",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(topServices);

  useEffect(() => {
    setFilteredServices(
        topServices.filter((service) =>
            service.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
  }, [searchQuery]);

  const moveToMG = (id) => {
    navigate(`/services/${id}`);
  };



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
            h={{ base: "478px", md: "598px" }}
            bgImage="url('https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1615375782838-f890f8.jpeg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgSize="cover"
        >
          <HomeHeader />
          <Box textAlign={{ md: "center" }} mt={{ base: "115px", md: "210px" }} px="2rem">
            <Text
                color="#fff"
                fontSize={{ base: "2xl", md: "5xl" }}
                fontWeight="800"
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
                animation={`${fadeIn} 1.5s ease-in-out`}
            >
              Endless possibilities, just one request away.
            </Text>
          </Box>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </Box>
        <Box>
          {filteredServices.length > 0 ? (
          <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 6 }}
              spacing={5}
              w={{ base: "85%", lg: "954px" }}
              m="-70px auto 0"
              p="24px"
              rounded="md"
              bg="white"
              boxShadow="xl"
          >
            {filteredServices.map((el) => (
                <Box
                    key={el.title}
                    bg="white"
                    w="112px"
                    h="100px"
                    rounded="md"
                    p="10px"
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    _hover={{ bg: "#e5e5e5", boxShadow: "lg" }}
                    onClick={() => moveToMG(el?.path)}
                    boxShadow={{base: "xl", md: "none"}}
                >
                  <Box w="fit-content" alignSelf="center" >
                    <Image h="50px" w="55px" src={el.img} alt="myImage" />
                  </Box>
                  <Box
                      textAlign="center"
                      lineHeight={"16px"}
                      mt={"8px"}
                      h="40px"
                      fontSize="14px"
                      color="#212121"
                  >
                    {el.title}
                  </Box>
                </Box>
            ))}
          </SimpleGrid>
          ) : (
              <Box textAlign="center" mt="20px" bg={"white"}>
                <Text fontSize={{ base: "md", md: "xl" }} color="gray.500">
                  {`No services found with ${searchQuery}`}
                </Text>
              </Box>
          )}
        </Box>
        <Box p="10px 0 64px" mt="70px">
          <Carousel images={imgArr} />
        </Box>
        <ServiceCategory title="Our Services" services={homeRepairServices} />
        <HowItWorks />
        <Testimonials testimonials={sampleTestimonials} />
        <Statistics />
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

const SearchBar = ({searchQuery, setSearchQuery}) => (
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
              w={{ base: "110px", md: "180px" }}
              h={{ base: "35px", md: "54px" }}
              fontSize={{ base: "14px", md: "16px" }}
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
            h={{ base: "40px", md: "54px" }}
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
        />
        <Input
            h={{ base: "40px", md: "54px" }}
            w={{ base: "100%", md: "572px" }}
            bg="white"
            type="text"
            placeholder="Search For Service"
            value={searchQuery}
            onChange={(e) =>
                setSearchQuery(e.target.value)}
        />
      </InputGroup>
    </Box>
);
export default Home;
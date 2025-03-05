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
import {allServices, sampleTestimonials, topServices} from "../Utils/Database";
import {keyframes} from "@emotion/react";
import HomeCarousel from "../Components/HomeCarousel";



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



// Define the keyframes for the animation
  const fadeInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  return (
      <>
        <Box
            h={{ base: "458px", md: "528px" }}
            background="linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://ik.imagekit.io/ulyn7697x/a74392cc513984d10924bc021574509a.jpg?updatedAt=1740981992690')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgSize="cover"
        >
          <HomeHeader />
          <Box textAlign={{ md: "center" }} mt={{ base: "80px", md: "120px", lg: "220px" }} px="2rem">
            <Text
                color="#fff"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="800"
                fontFamily="axiforma-semiBold,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif"
                animation={`${fadeInUp} 1.5s ease-in-out`}
                lineHeight={{base: "40px", md: "50px"}}
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
              w={{ base: "85%", lg: "900px" }}
              m="-60px auto 0"
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
                    position="relative"
                    boxShadow={{ base: "xl", md: "none" }}
                >
                  {el.tag && (
                      <Box
                          position="absolute"
                          top="-8px"
                          right="-30px"
                          bg="red.500"
                          color="white"
                          px="8px"
                          py="2px"
                          rounded="md"
                          fontSize="9px"
                          fontWeight="bold"
                          zIndex="999"
                      >
                        {el.tag}
                      </Box>
                  )}
                  <Box w="fit-content" alignSelf="center">
                    <Image h="50px" w="55px" src={el.img} alt="myImage" />
                  </Box>
                  <Box
                      textAlign="center"
                      lineHeight={"16px"}
                      mt={"8px"}
                      h="40px"
                      fontSize={{ base: "14px", md: "14px", lg: "16px" }}
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
        <ServiceCategory title="Our Services" services={allServices} />
        <HowItWorks />
        <Testimonials testimonials={sampleTestimonials} />
        <Statistics />
        <HomeFooter />
      </>
  );
};

const imgArr = [
  "https://ik.imagekit.io/ulyn7697x/ondemand.png?updatedAt=1740918384244",
  "https://ik.imagekit.io/ulyn7697x/Onestops%20Ads%205.png?updatedAt=1740918217809",
  "https://ik.imagekit.io/ulyn7697x/Onestops%20Ads%203.png?updatedAt=1740917970719",
  "https://ik.imagekit.io/ulyn7697x/Onestop%20Ads%202.png?updatedAt=1740917970609",
  "https://ik.imagekit.io/ulyn7697x/Onestop%20ads%204.png?updatedAt=1740918218022",
];

const SearchBar = ({searchQuery, setSearchQuery}) => (
    <Box
        display="flex"
        gap="1rem"
        m="1rem auto"
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
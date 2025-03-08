import React, {useContext, useState} from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Divider,
  Tag,
  TagLabel,
  TagLeftIcon,
  SimpleGrid,
  Button,
 MenuList, Menu, MenuButton, MenuItem, Grid, GridItem, Checkbox, Switch,
} from "@chakra-ui/react";
import {PhoneIcon, StarIcon} from "@chakra-ui/icons";
import { RiShieldCheckFill } from "react-icons/ri";
import { Appcontext } from "../Context/Appcontext";
import {useNavigate, useParams} from "react-router-dom";
import {ServicesDatabase} from "../Utils/Database";
import { FaCalendarCheck, FaWhatsapp} from "react-icons/fa";
import OnDemandService from "../Components/ServiceCategory/OnDemandService";
import demandImage from "../assests/ondemand.png";
import {IoCheckmarkCircle, IoCheckmarkCircleOutline, IoCheckmarkCircleSharp} from "react-icons/io5";
import Footer from "../Layouts/Footer";

const Service = () => {
  const { cartItems, setCartItems, price } = useContext(Appcontext);
  const navigate = useNavigate();
  const { id: serviceId } = useParams();
  const serviceData = ServicesDatabase.find(service => service.id === serviceId) || ServicesDatabase[0];

  const addToCart = (i) => {
    let item = serviceData.packages.filter((el, ind) => ind === i);
    setCartItems([...cartItems, item[0]]);
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleWhatsAppClick = (el) => {
    const selectedText = el.list
        .filter(item => selectedItems.includes(item))
        .map(item => `- ${item}`)
        .join("\n");
    const message = `I am interested in the ${el.name} service.\n\nSelected items:\n${selectedText}`;
    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/7039619954?text=${encodedMessage}`);
  };

  const goToCart = () => {
    navigate("/carts");
  };

  const handleImageClick = (title) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("highlight");
      setTimeout(() => {
        element.classList.remove("highlight");
      }, 2000);
    }
  };

  return (
      <>
        <Box w={{base:"100%", md:"60%"}} m="auto" h="100%" px={{base: "20px", md:"0px"}} mb="2rem">
          <Flex borderBottom="4px solid #EDEDED" p={{base: "20px 0", md: "40px 0"}}>
            <Flex  flexDirection={"column"}>
              <Box>
                <Tag
                    size={{base: "md", md: "lg"}}
                    variant="outline"
                    colorScheme={"black"}
                    border="1px solid gray"
                    mb={1}
                >
                  <TagLeftIcon boxSize="16px" as={RiShieldCheckFill} />
                  <TagLabel>One Stop Safe</TagLabel>
                </Tag>
              </Box>
              <Text fontSize={{base: "1.5rem", md: "2rem"}} fontWeight="bold">
                {serviceData.title}
              </Text>
              <Box>
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                      .fill("")
                      .map((_, i) => (
                          <StarIcon key={i} color="gray" />
                      ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {serviceData.ratings}
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Flex>
          <Flex borderBottom="2px solid #E3E3E3" p="30px 0" gap="1.5rem" flexWrap={"wrap"}>
            {serviceData.packages?.map((el) => (
                <Flex
                    flexDirection={"column"}
                    alignItems="center"
                    h="fit-content"
                    w="88px"
                    boxSizing="border-box"
                    key={el.title}
                >
                  <Box rounded={"md"} mb="10px">
                    <Image height={"88px"}
                           rounded="md"
                           src={el.img}
                           loading="lazy"
                           transition="transform 0.4s"
                           _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
                           _active={{ cursor: "pointer" }}
                           onClick={() => handleImageClick(el.name)}
                    />
                  </Box>
                  <Box
                      fontSize="12px"
                      w="fit-content"
                      textAlign={"center"}
                      fontWeight="400"
                  >
                    <Text>{el.name}</Text>
                  </Box>
                </Flex>
            ))}
          </Flex>

          
          <Flex borderBottom="4px solid #ededed" pb="50px" flexDirection={{base:"column", lg:"row"}}>
            <Box
                w={{base:"100%", lg:"60%"}}
                p="30px 0px"
            >
                {serviceData?.packages?.map((el, i) => (
                    <Box key={i} id={el.name} pr={{ base: "0rem", md: "2rem" }}>
                          <Flex gap={"10px"} justifyContent={"space-between"}>
                            <Box w={"70%"}>
                                <Text fontSize={{base: "md", md: "lg"}} fontWeight="700" wordBreak="break-word">
                                  {el.name}
                                </Text>
                                <Box mt="3px">
                                  <Text fontSize="14px" fontWeight="700">
                                    <Text as="span" color="gray" fontWeight="thin">
                                      Duration: {el.time}
                                    </Text>
                                  </Text>
                                </Box>
                                <Box mt="5px">
                                    <Text as="span" color="gray" fontSize="12px" fontWeight="thin">
                                      Select services you want to book
                                    </Text>
                              </Box>
                            </Box>
                            <Box rounded="md" mt="5px" mb="16px" w={"30%"}>
                              <Image
                                  width="full"
                                  rounded="md"
                                  src={el.img}
                                  loading="lazy"
                                  transition="transform 0.4s"
                              />
                            </Box>
                          </Flex>
                          <Box fontSize="sm" mb="1rem" color="gray">
                            <Flex wrap="wrap" gap="10px">
                              {el.list.map((item) => (
                                  <Box
                                      key={item}
                                      border="1px solid"
                                      borderColor="gray.200"
                                      flexGrow={"1"}
                                      display={"flex"}
                                      alignItems={"center"}
                                      rounded="md"
                                      p="10px 12px"
                                      cursor="pointer"
                                      onClick={() => handleCheckboxChange(item)}
                                      _hover={{ boxShadow: "md", transform: "scale(1.01)" }}
                                      transition="transform 0.2s"
                                      bg={selectedItems.includes(item) ? "blue.50" : "white"}
                                  >
                                      {/*<Switch*/}
                                      {/*    isChecked={selectedItems.includes(item)}*/}
                                      {/*    onChange={() => handleCheckboxChange(item)}*/}
                                      {/*    size={{base: "sm", md: "md"}}*/}
                                      {/*    colorScheme="blue"*/}
                                      {/*>*/}
                                      {/*</Switch>*/}

                                    {selectedItems.includes(item) ?
                                        <IoCheckmarkCircle size="20" color="green"/> :
                                        <IoCheckmarkCircleOutline size="20"/>
                                        }

                                      <Text fontSize={{ base: "0.8rem", md: "0.9rem" }} ml="10px">
                                        {item}
                                      </Text>
                                  </Box>
                              ))}
                            </Flex>
                          </Box>
                          <Flex flexDirection="row" justifyContent="flex-end" h="full">
                            <Menu>
                              <MenuButton
                                  as={Button}
                                  bgGradient="linear(to-r, blue.300, blue.600)"
                                  color="white"
                                  h="2rem"
                                  fontSize={{ base: "0.8rem", md: "1rem" }}
                                  leftIcon={<FaCalendarCheck />}
                                  _hover={{ bgGradient: "linear(to-r, blue.600, blue.300)" }}
                                  _active={{ bgGradient: "linear(to-r, blue.600, blue.300)" }}
                                  transition="transform 0.5s ease"
                                  _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                                  w={"max-content"}
                              >
                                Book Now
                              </MenuButton>
                              <MenuList fontSize={{ base: "0.9rem", md: "1rem" }}>
                                <MenuItem
                                    icon={<FaWhatsapp fontSize="16px" color="green" />}
                                    onClick={() => handleWhatsAppClick(el)}
                                >
                                  Book via WhatsApp<Text fontSize="10px">(Preferred)</Text>
                                </MenuItem>
                                <MenuItem
                                    icon={<PhoneIcon fontSize="14px" color="blue.600" />}
                                    onClick={() => window.open(`tel:+917039619954`)}
                                >
                                  Book via Call
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          </Flex>
                      <Divider m="20px 0" borderColor="blackAlpha.500" w="80%" />
                    </Box>
                ))}
             
            </Box>
            <center>
              <Divider orientation="vertical" borderColor="blackAlpha.500" m="20px 0"/>
            </center>
            {/* Coupons Box */}
            <Box h="fit-content" p={{base: "0px 0px", md: "50px 20px"}} w={{base:"100%", lg:"40%"}}>
              <SimpleGrid spacingY={"20px"} >
                <Flex
                    boxSizing="border-box"
                    gap="0.5rem"
                    p="8px 12px"
                    rounded="md"
                    bg="whitesmoke"
                >
                  <Box>
                    <Image
                        src="https://img.icons8.com/fluency/2x/star.png"
                        h="20px"
                        w="20px"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="14px" color="#757575">
                      Confused? You can request anything !!!
                    </Text>
                  </Box>
                </Flex>
                <Flex direction={"column"} align="center">
                  <Image
                      src={demandImage}
                      alt="Service Image"
                      objectFit="cover"
                  />
                  <Box flex="1" mt={"1rem"} >
                    <OnDemandService />
                  </Box>
                </Flex>
                {cartItems.length !== 0 && (
                    <Flex
                        boxSizing="border-box"
                        gap="0.5rem"
                        p="8px 22px"
                        rounded="md"
                        bg="white"
                        w={{md: "352px"}}
                        justifyContent="space-between"
                        align="center"
                    >
                      <Text fontSize="20px" color="#0f0f0f" fontWeight="bold">
                        &#8377; {price}
                      </Text>
                      <Button colorScheme="blue" p="24px 26px" onClick={goToCart}>
                        View Cart
                      </Button>
                    </Flex>
                )}
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </>
  );
};

export default Service;
import React, { useContext } from "react";
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
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {PhoneIcon, StarIcon} from "@chakra-ui/icons";
import { RiShieldCheckFill } from "react-icons/ri";
import { Appcontext } from "../Context/Appcontext";
import {useNavigate, useParams} from "react-router-dom";
import {ServicesDatabase} from "../Utils/Database";
import {FaWhatsapp} from "react-icons/fa";
import OnDemandService from "../Components/ServiceCategory/OnDemandService";
import demandImage from "../assests/ondemand.png";

const Service = () => {
  const { cartItems, setCartItems, price } = useContext(Appcontext);
  const navigate = useNavigate();
  const { id: serviceId } = useParams();
  const serviceData = ServicesDatabase.find(service => service.id === serviceId) || ServicesDatabase[0];


  const addToCart = (i) => {
    let item = serviceData.packages.filter((el, ind) => ind === i);
    setCartItems([...cartItems, item[0]]);
  };

  const goToCart = () => {
    navigate("/carts");
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
                  {/*<Box as="span" ml="2" color="gray.600" fontSize="sm">*/}
                  {/*  {serviceData.rating} ({serviceData.reviews})*/}
                  {/*</Box>*/}
                </Box>
              </Box>
            </Flex>
          </Flex>
          {/* Small Images Box */}
          <Flex borderBottom="2px solid #E3E3E3" p="30px 0" gap="1.5rem" flexWrap={"wrap"}>
            {serviceData.smallImg?.map((el) => (
                <Flex
                    flexDirection={"column"}
                    alignItems="center"
                    h="fit-content"
                    w="70px"
                    boxSizing="border-box"
                    key={el.title}
                >
                  <Box rounded={"md"} mb="10px">
                    <Image h="64px" w="64px" rounded="md" src={el.img} />
                  </Box>
                  <Box
                      fontSize="12px"
                      w="fit-content"
                      textAlign={"center"}
                      fontWeight="400"
                  >
                    <Text>{el.title}</Text>
                  </Box>
                </Flex>
            ))}
          </Flex>
          {/* Service and Tags */}
          <Flex borderBottom="4px solid #ededed" pb="50px" flexDirection={{base:"column", lg:"row"}}>
            <Box
                w={{base:"100%", lg:"70%"}}
                p="30px 10px 0px"
            >
              <SimpleGrid p="20px 0" spacingY="20px">
                {serviceData?.packages?.map((el, i) => (
                    <Box key={i}>
                      <Box display="flex" alignItems="center">
                        <Image
                            h="20px"
                            mr="5px"
                            src="https://img.icons8.com/external-wanicon-two-tone-wanicon/2x/external-box-logistics-wanicon-two-tone-wanicon-2.png"
                        />
                        <Text color="green.700" display="flex">
                          Package
                        </Text>
                      </Box>
                      <Flex alignItems="center" justifyContent="space-between" w={{base: "100%"}} >
                        <Text fontSize="18px" fontWeight="700">
                          {el.name}
                        </Text>
                        {/*<Button*/}
                        {/*    variant="outline"*/}
                        {/*    colorScheme="blue"*/}
                        {/*    h="30px"*/}
                        {/*    onClick={() => addToCart(i)}*/}
                        {/*>*/}
                        {/*  Add*/}
                        {/*</Button>*/}
                      </Flex>
                      {/* Stars and Ratings */}
                      {/*<Box display="flex" alignItems="center">*/}
                      {/*  {Array(1)*/}
                      {/*      .fill("")*/}
                      {/*      .map((_, i) => (*/}
                      {/*          <StarIcon key={i} color="gray" />*/}
                      {/*      ))}*/}
                      {/*  <Box as="span" ml="2" color="gray.600" fontSize="xs">*/}
                      {/*    {el.rating}*/}
                      {/*  </Box>*/}
                      {/*</Box>*/}
                      {/* Price and hours */}
                      <Box mt="3px">
                        <Text fontSize="15px" fontWeight="700">
                          {/*&#8377; {el.price} &bull;{" "}*/}
                          <Text as="span" color="gray" fontWeight="thin">
                            Duration: {el.time}
                          </Text>{" "}
                        </Text>
                      </Box>
                      {/*<Divider m="10px 0" borderColor="blackAlpha" w="70%" />*/}
                      <Box>
                        <UnorderedList color="gray" pl="10px" lineHeight="20px" fontSize="15px">
                          {el.list.map((el) => (
                              <ListItem key={el}>{el}</ListItem>
                          ))}
                        </UnorderedList>
                      </Box>
                      <Flex gap={"1rem"} flexWrap={"wrap"} mt={"1rem"}>
                      <Button
                          variant="outline"
                          colorScheme="blue"
                          h="30px"
                          leftIcon={<PhoneIcon />}
                          onClick={() => window.open(`tel:+917039619954`)}
                      >
                        Book via Call
                      </Button>
                      <Button
                          // variant="outline"
                          colorScheme="green"
                          h="30px"
                          leftIcon={<FaWhatsapp />}
                          onClick={() => window.open(`https://wa.me/7039619954?text=I%20am%20interested%20in%20the%20${encodeURIComponent(el.name)}%20service`)}
                      >
                        Book via WhatsApp
                      </Button>
                        </Flex>
                      <Divider m="20px 0" borderColor="blackAlpha.500" w="80%" />
                    </Box>

                ))}
              </SimpleGrid>
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
                      // width={{ base: "100%", md: "50%" }}
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
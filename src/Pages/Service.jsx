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
import { StarIcon } from "@chakra-ui/icons";
import { RiShieldCheckFill } from "react-icons/ri";
import { Appcontext } from "../Context/Appcontext";
import {useNavigate, useParams} from "react-router-dom";
import {ServicesDatabase} from "../Utils/Database";

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
          <Flex borderBottom="4px solid #EDEDED" p="40px 0">
            <Flex  flexDirection={"column"}>
              <Box>
                <Tag
                    size={{base: "md", md: "lg"}}
                    variant="outline"
                    colorScheme={"black"}
                    border="1px solid gray"
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
                    {serviceData.rating} ({serviceData.reviews})
                  </Box>
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
                w={{base:"100%", lg:"60%"}}
                p="30px 10px 0px"
            >
              <SimpleGrid p="20px 0" spacingY="40px">
                {serviceData?.packages?.map((el, i) => (
                    <Box>
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
                      <Flex alignItems="center" justifyContent="space-between" w={{base: "100%", md:"90%"}} >
                        <Text fontSize="18px" fontWeight="700">
                          {el.name}
                        </Text>
                        <Button
                            variant="outline"
                            colorScheme="purple"
                            h="30px"
                            onClick={() => addToCart(i)}
                        >
                          Add
                        </Button>
                      </Flex>
                      {/* Stars and Ratings */}
                      <Box display="flex" alignItems="center">
                        {Array(1)
                            .fill("")
                            .map((_, i) => (
                                <StarIcon key={i} color="gray" />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="xs">
                          {el.rating}
                        </Box>
                      </Box>
                      {/* Price and hours */}
                      <Box mt="3px">
                        <Text fontSize="15px" fontWeight="700">
                          &#8377; {el.price} &bull;{" "}
                          <Text as="span" color="gray" fontWeight="thin">
                            {el.time}
                          </Text>{" "}
                        </Text>
                      </Box>
                      <Divider m="10px 0" borderColor="blackAlpha" w="70%" />
                      <Box>
                        <UnorderedList color="gray" pl="10px" lineHeight="20px" fontSize="15px">
                          {el.list.map((el) => (
                              <ListItem>{el}</ListItem>
                          ))}
                        </UnorderedList>
                      </Box>
                    </Box>
                ))}
              </SimpleGrid>
            </Box>
            <center>
              <Divider orientation="vertical" borderColor="blackAlpha.700" />
            </center>
            {/* Coupons Box */}
            <Box h="fit-content" p="50px 20px" >
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
                      Get Plus Now
                    </Text>
                  </Box>
                </Flex>
                {/* Cart box here, make sure to hide it incase no items in cart */}
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
                      <Button colorScheme="purple" p="24px 26px" onClick={goToCart}>
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
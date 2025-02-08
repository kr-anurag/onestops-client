import React, { useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
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
import { useNavigate } from "react-router-dom";

const smallImg = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/luminosity/1646814042922-25f8f1.jpeg",
    title: "Packages",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631190374864-78f3e8.jpeg",
    title: "Haircut for Men & Kids",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189933595-01692d.png",
    title: "Hair Color",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189957304-ea2a7b.png",
    title: "Shave/Beard Grooming",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189857376-d49e47.png",
    title: "Face Care",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/images/growth/home-screen/1631189905841-237b37.png",
    title: "Massage Therapy",
  },
];



const MensGrooming = () => {
  const { cartItems, setCartItems , price, packages} = useContext(Appcontext);

  const navigate = useNavigate();

  const addToCart = (i) => {
    let item = packages.filter((el, ind) => ind === i);
    setCartItems([...cartItems, item[0]]);
  };

  const goToCart = () => {
    navigate("/CartPage")
  }

  return (
    <>
      <Box w="60%" m="auto"  h="100%">
        <Flex
          borderBottom="4px solid #EDEDED"
          p="40px 0"
        >
          <Flex h="159px" w="448px" flexDirection={"column"}>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme={"black"}
                border="1px solid gray"
              >
                <TagLeftIcon boxSize="16px" as={RiShieldCheckFill} />
                <TagLabel>One Stop Safe</TagLabel>
              </Tag>
            </Box>
            <Text fontSize={"36px"} fontWeight="bold">
              Salon For Men
            </Text>
            <Box>
              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon key={i} color="gray" />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  4.75 (975k)
                </Box>
              </Box>
            </Box>
          </Flex>
        </Flex>
        {/* Small Images Box */}
        <Flex borderBottom="2px solid #E3E3E3" p="30px 0" gap="1.5rem">
          {smallImg.map((el) => (
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
        {/* Services and Tags */}
        <Flex
          justifyContent={"space-between"}
          borderBottom="4px solid #ededed"
          pb="50px"
        >
          {/*Services Main Box */}
          <Box
            w="59%"
            p="30px 10px 0px"
            h="630px"
            overflowY="scroll"
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `#ededed`,
                borderRadius: `10px`,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: `gray.100`,
              },
            }}
          >
            {/* Individual Box */}
            <SimpleGrid p="20px 0" spacingY="60px">
              {packages.map((el, i) => (
                <>
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
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      w="90%"
                    >
                      <Text fontSize="18px" fontWeight="700">
                        {el.name}
                      </Text>
                      <Button
                        variant="outline"
                        colorScheme="purple"
                        h="30px"
                        onClick={() => addToCart(i)}
                      >
                        Add to Cart
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
                      <UnorderedList
                        color="gray"
                        pl="10px"
                        lineHeight="20px"
                        fontSize="15px"
                      >
                        {el.list.map((el) => (
                          <ListItem>{el}</ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  </Box>
                </>
              ))}
            </SimpleGrid>
          </Box>
          <center>
            <Divider orientation="vertical" borderColor="blackAlpha.700" />
          </center>
          {/* Coupons Box */}
          <Box w="39%" h="fit-content" p="50px 0">
            <SimpleGrid spacingY={"20px"} justifyContent="end">
              <Flex
                boxSizing="border-box"
                gap="0.5rem"
                p="8px 12px"
                rounded="md"
                bg="whitesmoke"
                w="352px"
              >
                <Box>
                  <Image
                    src="https://img.icons8.com/fluency/2x/star.png"
                    h="20px"
                    w="20px"
                  />
                </Box>
                <Box>
                  <Text
                    fontWeight={"700"}
                    color="rgb(15,15,15)"
                    fontSize={"14px"}
                  >
                    Save 15% on every order
                  </Text>
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
                  w="352px"
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

export default MensGrooming;

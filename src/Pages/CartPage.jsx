import {
  Box,
  Text,
  HStack,
  Flex,
  IconButton,
  VStack,
  Divider,
  Button,
  Spacer,
  ButtonGroup,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import Login from "../Components/Modals/Login";
import AddressForm from "../Components/Modals/AddressForm";
import {serviceData} from "./Services";

const CartPage = () => {
  const { cartItems,  setCartItems, user } =
    useContext(Appcontext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/services");
  };


  const handleQty = (id, amount) => {
    let a = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    );
    setCartItems(a);
  };

  const finalPrice = cartItems.reduce((acc, el) => {
    return acc + el.price * el.qty;
  }, 0);

  console.log(user);

  return (
    <Box  w={{base:"100%", md:"60%"}} m="auto" h="100%" px={{base: "20px", md:"0px"}} mb="2rem">
      <Flex borderBottom="1px solid #e3e3e3" p="12px 0px" align="center">
        <IconButton
          icon={<HiArrowNarrowLeft />}
          variant="ghost"
          onClick={goBack}
          _hover={{ bg: "none" }}
        />
        <Text fontWeight="600" color="rgb(15,15,15)">
          Summary
        </Text>
      </Flex>
        {/* Cart items box here */}
      <Flex flexDirection={{base:"column", md:"row"}} gap="2rem">
        <Flex w={{base:"100%", md:"60%"}}
          gap="2rem"
          p="20px 10px"
              direction="column"
        >
          {cartItems.length === 0 ? (
            <Text> EMPTY CART</Text>
          ) : (
            cartItems.map((el, i) => (
              <Box
                p="10px 8px"
                boxSizing="border-box"
              >
                {/* HomeHeader */}
                <Flex alignItems="center">
                  <Box>
                    <Text>{el.name}</Text>
                  </Box>
                  <Spacer />
                  <Box display="flex" gap="2rem">
                    <ButtonGroup
                      size="sm"
                      isAttached
                      variant="outline"
                      colorScheme="purple"
                    >
                      <IconButton
                        icon={<MinusIcon />}
                        borderRight="none"
                        disabled={el.qty === 0}
                        onClick={() => handleQty(el.id, -1)}
                      />
                      <Button>{el.qty}</Button>
                      <IconButton
                        icon={<AddIcon />}
                        onClick={() => handleQty(el.id, 1)}
                        disabled={el.qty === 3}
                      />
                    </ButtonGroup>
                    <Text alignSelf="center"> &#8377; {el.price}</Text>
                  </Box>
                </Flex>
                {/* list of services */}
                <Divider w="87%" m="10px 0" />
                <HStack p="0 10px" >
                  <UnorderedList color="gray" fontSize="14px">
                    {serviceData.packages[i].list.map((el) => (
                      <ListItem>{el}</ListItem>
                    ))}
                  </UnorderedList>
                </HStack>
              </Box>
            ))
          )}
        </Flex>
        {/* Payment Section here */}
        <Flex
          p="20px 10px"
          w={{base:"100%", md:"40%"}}
          pb="0"
          direction="column"
          justifyContent="space-between"

        >
          <VStack spacing={4}>
            <Text color="rgb(15,15,15)" fontWeight="600" alignSelf="flex-start">
              Payment summary
            </Text>
            <Flex justifyContent="space-between" w="100%">
              <Text>Item total</Text>
              <Text>&#8377; {finalPrice}</Text>
            </Flex>
            <Flex justify={"space-between"} w="100%">
              <Text textDecoration="underline">Convinience fee</Text>
              <Text>&#8377; 49</Text>
            </Flex>
            <Divider m="14px 0" borderColor="blackAlpha.700" />
            <Flex w="100%" justify="space-between" fontWeight="600">
              <Text>Total</Text>
              <Text>&#8377; {finalPrice + 49}</Text>
            </Flex>
          </VStack>
          <Box borderTop="1px solid #e3e3e3" p="9px 0" align="center">
            {user.verified_email ? <AddressForm /> : <Login />}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartPage;

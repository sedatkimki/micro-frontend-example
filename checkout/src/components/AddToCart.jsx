import { Button, useToast } from "@chakra-ui/react";
import React from "react";
import useCartItems from "../store";

const AddToCart = ({ product }) => {
  const [cartItems, setCartItems] = useCartItems([]);
  const toast = useToast();

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} was added to your cart.`,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <Button colorScheme="blue" onClick={addToCart} width={"100%"}>
      Add to cart
    </Button>
  );
};

export default AddToCart;

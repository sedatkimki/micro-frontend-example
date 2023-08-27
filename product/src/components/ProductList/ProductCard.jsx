/* eslint-disable react/prop-types */
import { Box, Image, Flex, Badge, Text, AspectRatio } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";
import AddToCart from "checkout/AddToCart";

const ProductCard = ({ product }) => {
  return (
    <Box p="5" maxW="320px" height="auto" borderWidth="1px" borderRadius="md">
      <AspectRatio maxW="300px" ratio={4 / 3}>
        <Image borderRadius="md" src={product.thumbnail} alt={product.title} />
      </AspectRatio>
      <Flex justifyContent="space-between" align="center" mt={3}>
        <Badge colorScheme="blue">{product.category}</Badge>
        <Flex align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>{product.rating}</b>
          </Text>
        </Flex>
      </Flex>
      <Text
        mt={3}
        fontSize="2xl"
        fontWeight="semibold"
        lineHeight="short"
        noOfLines={1}
      >
        {product.title}
      </Text>
      <Text mt={2} noOfLines={2}>
        {product.description}
      </Text>

      <Text mt={2} mb={2} fontWeight="semibold" color="blue.600" fontSize="2xl">
        ${product.price}
      </Text>
      <AddToCart product={product} />
    </Box>
  );
};

export default ProductCard;

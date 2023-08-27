import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";

const ProductList = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    setLoading(true);
    fetchProducts();
  }, []);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`
        );
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    const delayDebounceFn = setTimeout(() => {
      if (query !== undefined) {
        setLoading(true);
        searchProducts();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <SimpleGrid columns={3} spacing={10}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;

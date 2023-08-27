import ProductList from "product/ProductList";
import Search from "search/Search";
import Cart from "checkout/Cart";

import useSearch from "search/searchStore";

import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

function App() {
  const [search, setSearch] = useSearch();

  return (
    <>
      <Box
        w="100%"
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection={"column"}
      >
        <Box minW={980}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Heading as="h1" size="xl" p={5}>
              Product List
            </Heading>
            <Search />
            <Cart />
          </Box>
          <ProductList query={search} />
        </Box>
      </Box>
    </>
  );
}

export default App;

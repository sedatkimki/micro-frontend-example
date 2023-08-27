import { Box } from "@chakra-ui/react";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <Box w="100%" alignItems="center" justifyContent="center" display="flex">
      <Box minW={980}>
        <ProductList />
      </Box>
    </Box>
  );
}

export default App;

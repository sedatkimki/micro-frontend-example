import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Center,
  Box,
  AspectRatio,
  Image,
  Text,
} from "@chakra-ui/react";
import { MdShoppingCart } from "react-icons/md";
import useCartItems from "../store";

const Cart = () => {
  const [cartItems, setCartItems] = useCartItems([]);

  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={Button}
        variant={"outline"}
        rightIcon={<MdShoppingCart />}
      >
        Cart: ({cartItems.length}) items
      </MenuButton>
      <MenuList shadow={"2xl"}>
        {cartItems.map((item) => (
          <>
            <MenuItem>
              <Box width={"100%"} display={"flex"} alignItems={"center"}>
                <AspectRatio width={"60px"} ratio={4 / 3}>
                  <Image
                    borderRadius="md"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </AspectRatio>
                <Box pl={3}>
                  <Text noOfLines={1} minW={"100px"} maxW={"100px"}>
                    {item.title}
                  </Text>
                </Box>
                <Box pl={3}>
                  <Text color={"blue.500"}>${item.price}</Text>
                </Box>
              </Box>
            </MenuItem>
            <MenuDivider />
          </>
        ))}

        <Box width={"100%"} px={3}>
          <Box pb={2} display={"flex"} justifyContent={"space-between"}>
            <Text>Subtotal:</Text>
            <Text color={"blue.500"}>
              ${cartItems.reduce((acc, item) => acc + item.price, 0)}
            </Text>
          </Box>
          <Button colorScheme="blue" width={"100%"}>
            Checkout
          </Button>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default Cart;

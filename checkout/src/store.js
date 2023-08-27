import { atom, useAtom } from "jotai";

const cartItemsAtom = atom([]);

const useCartItems = () => useAtom(cartItemsAtom);

export default useCartItems;

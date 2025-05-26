import { atom, selector } from "recoil";
import type { Product } from "../types/product.type";

export const cartContext = atom<Product[]>({
   key: "CartContext",
   default: []
});

export const totalPrice = selector({
   key: "TotalPriceCartContext",
   get: ({ get }) => {
      const cart = get(cartContext);
      return cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
   }
});

export const totalItems = selector({
   key: "TotalItemsCartContext",
   get: ({ get }) => {
      const items = get(cartContext);
      return items.reduce((acc, curr) => acc + curr.quantity, 0);
   }
});

export const totalProductInCart = selector({
   key: "TotalProductInCart",
   get: ({ get }) => {
      const cart = get(cartContext);
      return cart.length;
   }
});
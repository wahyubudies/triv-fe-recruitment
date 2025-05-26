import { useRecoilState } from "recoil";
import { cartContext } from "../context/cartContext";
import type { Product } from "../types/product.type";

export default function useCartActions() {
   const [cart, setCart] = useRecoilState(cartContext);

   const addItem = (product: Omit<Product, "quantity">) => {
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
         const updatedCart = cart.map(
            item => item.id === product.id ? {
               ...item,
               quantity: item.quantity + 1,
               totalItemPrice: (item.quantity + 1) * item.price
            } : item
         );
         setCart(updatedCart);
      } else {
         setCart([...cart, {
            ...product,
            quantity: 1,
            totalItemPrice: product.price * 1
         }]);
      }
   };

   const removeItem = (index: number) => {
      setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
   };

   const clearCart = () => {
      setCart([]);
   };

   const getQuantity = (id: string) => {
      return cart.find(item => item.id === id)?.quantity || 0;
   };

   const incrementQuantity = (id: string) => {
      setCart(cart.map(item => item.id === id ? {
         ...item,
         quantity: item.quantity + 1
      } : item)
      );
   };

   const decrementQuantity = (id: string) => {
      setCart(
         cart.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1
         } : item)
            .filter(item => item.quantity > 0)
      );
   };

   return { cart, addItem, removeItem, clearCart, getQuantity, incrementQuantity, decrementQuantity };
}
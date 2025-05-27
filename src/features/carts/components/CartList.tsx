import TrashIcon from "../../../assets/icons/trash.svg";
import ClearIcon from "../../../assets/icons/clear.svg";
import { useRecoilValue } from 'recoil';
import { cartContext, totalPrice } from '../../products/context/cartContext';
import useCartActions from '../../products/hooks/useCartActions';
import { toast } from 'react-toastify';
import { QuantityItem } from "../../../components/common";

const CartList = () => {
   const carts = useRecoilValue(cartContext);
   const totalAllItemPrice = useRecoilValue(totalPrice);
   const { removeItem, clearCart, incrementQuantity, decrementQuantity, getQuantity } = useCartActions();

   const removeDataItem = (index: number) => {
      removeItem(index);
      toast.success("Item removed from cart");
   };

   const clearAllItem = () => {
      clearCart();
      toast.success("All items are cleared");
   };

   return (
      <div className='py-10'>
         <div className="flex items-center justify-between  mb-5">
            <h1 className='text-gray-700 text-lg font-semibold tracking-wide'>Keranjang Belanja</h1>
            {carts.length > 0 ? <button
               className="bg-red-600 rounded-md p-1 cursor-pointer relative group"
               onClick={() => clearAllItem()}
               style={{ marginLeft: '10px' }}>
               <img src={ClearIcon} alt="Add to cart" className="w-5 h-5" />
               <span className="min-w-[100px] absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Clear All Item
                  <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-gray-500 border-r-[6px] border-r-transparent"></span>
               </span>
            </button> : ""}
         </div>
         {carts.length > 0 ? <>
            {carts.map((item, index) => {
               const qty = getQuantity(item.id);
               return (
                  <div key={index} className='bg-gray-200 rounded-md w-full p-4 mb-3 flex justify-between items-center'>
                     <p className='text-gray-600'>
                        <span className="font-bold">{item.name}</span> - @Rp{item.price} | <span className="font-bold">x{item.quantity} = Rp{item.totalItemPrice}</span>
                     </p>
                     <div className='flex items-center gap-2'>
                        <QuantityItem
                           qty={qty}
                           increment={() => incrementQuantity(item.id)}
                           decrement={() => decrementQuantity(item.id)}
                        />
                        <button
                           className="bg-red-400 rounded-md p-1 cursor-pointer relative group"
                           onClick={() => removeDataItem(index)}
                           style={{ marginLeft: '10px' }}>
                           <img src={TrashIcon} alt="Add to cart" className="w-5 h-5" />
                           <span className="min-w-[100px] absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              Remove Item
                              <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-gray-500 border-r-[6px] border-r-transparent"></span>
                           </span>
                        </button>
                     </div>
                  </div>
               );
            })}
            <p className='text-gray-700 text-lg my-5 font-semibold tracking-wide'>Total Belanja : Rp{totalAllItemPrice}</p>
         </> : (
            <p className='text-gray-400 text-sm text-center italic my-5 tracking-wide'>No items are available.</p>
         )}
      </div>
   );
};

export default CartList;
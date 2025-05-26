import { useRecoilValue } from "recoil";
import CartIcon from "../../../assets/icons/cart.svg";
import { totalProductInCart } from "../context/cartContext";
import { NavLink } from "react-router";

const CartButton = () => {
   const totalItemState = useRecoilValue(totalProductInCart);

   return (
      <NavLink to="/carts">
         <button className="p-1.5 bg-gray-200 rounded-md relative cursor-pointer">
            <img src={CartIcon} alt="" className="w-[25px] h-[25px]" />
            {totalItemState && totalItemState > 0 ? <span className="bg-primary text-white absolute right-[-5px] top-[-5px] rounded-full text-xs h-[10px] w-[10px] flex items-center justify-center p-2">
               {totalItemState}
            </span> : ""}
         </button>
      </NavLink>
   );
};

export default CartButton;
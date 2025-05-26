import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";

const QuantityItem = ({ qty, increment, decrement }
   : {
      qty: number;
      increment: VoidFunction,
      decrement: VoidFunction;
   }) => {

   return (
      <div className="flex items-center gap-2">
         <button
            className="bg-slate-500 rounded-md p-1 cursor-pointer relative group"
            onClick={() => decrement()}>
            <img src={minusIcon} alt="Decrease quantity" className="w-5 h-5" />
         </button>
         <div className="w-5 h-5 p-3.5 flex items-center justify-center bg-white rounded-md text-xs font-medium text-gray-700">
            {qty}
         </div>
         <button
            className="bg-slate-500 rounded-md p-1 cursor-pointer relative group"
            onClick={() => increment()}>
            <img src={plusIcon} alt="Increase quantity" className="w-5 h-5" />
         </button>
      </div>
   );
};

export default QuantityItem;
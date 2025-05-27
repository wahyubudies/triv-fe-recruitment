import useCartActions from '../hooks/useCartActions';
import AddToCartIcon from "../../../assets/icons/add-to-cart.svg";
import { toast } from 'react-toastify';
import type { Product } from '../types/product.type';
import { QuantityItem } from '../../../components/common';

const products = [
   { id: '1', name: 'Smartphone X', price: 1299, quantity: 0 },
   { id: '2', name: 'Laptop Pro', price: 2499, quantity: 0 },
   { id: '3', name: 'Wireless Earbuds', price: 199, quantity: 0 },
   { id: '4', name: 'Smart Watch', price: 299, quantity: 0 },
   { id: '5', name: 'Gaming Console', price: 499, quantity: 0 },
   { id: '6', name: 'Digital Camera', price: 899, quantity: 0 },
   { id: '7', name: 'Tablet Elite', price: 799, quantity: 0 },
   { id: '8', name: 'Bluetooth Speaker', price: 149, quantity: 0 },
   { id: '9', name: 'Power Bank', price: 79, quantity: 0 },
   { id: '10', name: 'Fitness Tracker', price: 129, quantity: 0 },
];

const ProductList = () => {
   const { addItem, incrementQuantity, decrementQuantity, getQuantity } = useCartActions();

   const addToCart = (product: Omit<Product, "quantity">) => {
      toast.success("This product has been added to cart");
      addItem(product);
   };

   return (
      <div className='py-10'>
         <h1 className='text-gray-700 text-lg mb-5 font-semibold tracking-wide'>Daftar Produk</h1>
         {products.map(product => {
            const qty = getQuantity(product.id);
            return (<div className='bg-gray-200 rounded-md w-full p-4 mb-3 flex justify-between items-center' key={product.id}>
               <p className='text-gray-600'><span className="font-bold">{product.name}</span> - Rp{product.price}</p>
               {qty > 0 ? (
                  <QuantityItem
                     qty={qty}
                     increment={() => incrementQuantity(product.id)}
                     decrement={() => decrementQuantity(product.id)}
                  />
               ) : (<button
                  className="bg-primary rounded-md p-1 cursor-pointer relative group"
                  onClick={() => addToCart(product)}
                  style={{ marginLeft: '10px' }}>
                  <img src={AddToCartIcon} alt="Add to cart" className="w-5 h-5" />
                  <span className="min-w-[90px] absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                     Add to Cart
                     <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-gray-500 border-r-[6px] border-r-transparent"></span>
                  </span>
               </button>)}
            </div>);
         })}
      </div>
   );
};

export default ProductList;
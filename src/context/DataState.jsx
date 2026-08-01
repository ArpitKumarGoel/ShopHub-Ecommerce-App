import React, { useState } from 'react';
import DataContext from './DataContext';
import { items} from './Data';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DataState = (props) => {
    const[products,setProducts]=useState(items);
    const [cart, setCart] = useState([]);

    const addToCart=(id,title,price,imgSrc)=>{
      const obj={id,title,price,imgSrc};
       toast.success("Item Added To Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    setCart([...cart, obj]);
  };
   const clearCart = () => {
    toast.success("Cart has been cleared...!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    
    setCart([]);
  };
  console.log(cart);

    
  return (
    <DataContext.Provider value={{ products, setProducts, cart, setCart ,addToCart,clearCart}}>
        <ToastContainer/>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataState
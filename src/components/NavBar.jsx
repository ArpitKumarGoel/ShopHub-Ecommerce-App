import React, {useState,useContext} from 'react'
import { FaShopify , FaShoppingCart ,FaSearch } from "react-icons/fa"; 
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const NavBar = () => {
const[searchTerm,setSearchTerm]=useState("");
 const { cart } = useContext(DataContext);
const navigate=useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/product/search/${searchTerm}`);
      setSearchTerm(""); // Clear input after search
    }
  };


  return (
    <>
    <div className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 sticky-top shadow">
      <div className="container-fluid">
        <Link to={'/'} className='navbar-brand d-flex align-items-center'>
        <FaShopify className='text-warning fs-2 me-2' /> 
        <span className='fs-4 fw-bold'>ShopHub</span>
        </Link>
  
      
        <form className=" mx-auto search-container"
          onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control search-input"
            placeholder='Search Products'
            value={searchTerm}
            onChange={ (e)=> setSearchTerm(e.target.value)}
          />
          <button className=" search-button btn btn-warning"><FaSearch/></button>
        </form>
  

        <ul className="navbar-nav mx-auto gap-2 d-flex">
          {["Mobiles", "Laptops", "Tablets","Watches"].map((category) => (
            <li className="nav-items" key={category}>
              <Link to={`/product/category/${category}`} className="nav-link category-link">
                {category}
              </Link>
            </li>
          ))}
        </ul>


        <Link to={'/cart'} 
        type="button" 
        className="btn btn-warning position-relative cart-btn">
          <FaShoppingCart className="fs-4"/>
   {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          )}
</Link>
        
      </div>
    </div>
    </>
  )
}

export default NavBar
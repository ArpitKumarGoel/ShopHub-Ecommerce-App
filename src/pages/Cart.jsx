import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import DataContext from "../context/DataContext";

const Cart = () => {
  const { cart, clearCart, removeFromCart } = useContext(DataContext);
  const totalPrice = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="empty-cart text-center my-5 py-5">
          <h1 className="fw-bold mb-3">Your Cart is Empty 🛒</h1>
          <p className="text-muted mb-4">Looks like you haven't added anything to your cart yet.</p>
          <Link to={"/"} className="btn btn-warning btn-lg fw-bold px-4">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="row d-flex justify-content-center">
            {cart.map((product) => (
              <div key={product.id} className="col-lg-8 col-md-10 my-3">
                <div className="card cart-card shadow-sm border-0">
                  <div className="row g-0 align-items-center p-3">
                    <div className="col-md-4 d-flex justify-content-center">
                      <img
                        src={product.imgSrc}
                        className="cart-img img-fluid rounded"
                        alt={product.title}
                        style={{ maxHeight: "150px", objectFit: "contain" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center text-md-start">
                        <h5 className="card-title fw-bold">{product.title}</h5>
                        <p className="card-text text-muted">{product.description}</p>
                        <p className="cart-price fw-bold text-success fs-5">{product.price} ₹</p>
                        <div className="button-group d-flex gap-2 justify-content-center justify-content-md-start">
                          <button className="btn btn-warning fw-bold">Buy Now</button>
                          {removeFromCart && (
                            <button 
                              onClick={() => removeFromCart(product.id)} 
                              className="btn btn-outline-danger"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

    
          <div className="text-center my-4 p-4 rounded bg-dark text-white col-lg-8 col-md-10 mx-auto shadow">
            <h3 className="mb-3">
              Total Amount: <span className="text-warning fw-bold">{totalPrice} ₹</span>
            </h3>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <button className="btn btn-warning fw-bold px-4">CheckOut</button>
              <button onClick={clearCart} className="btn btn-danger px-4">
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
import React from "react";
import { UseCart } from "./ContextProvider";
import CartItem from "./CartItem";
import Styles from "./Cart.module.css";
function Cart() {
  const { cart } = UseCart();
  const TotalAmount = cart.reduce((TotalAmount, item) => {
    return TotalAmount + item.price * item.quantity;
  }, 0);
  if (cart.length === 0) {
    return <h3>Items not found</h3>;
  }
  return (
    <div className={Styles.container}>
      <h3 className={Styles.heading}>Shopping Cart</h3>
      <div>
        {cart.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
      <h2 className={Styles.TotalAmount}>TotalAmount:&#8377;{TotalAmount}</h2>
    </div>
  );
}

export default Cart;

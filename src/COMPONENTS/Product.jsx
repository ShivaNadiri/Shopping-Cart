import React from "react";
import { UseCart } from "./ContextProvider";
import Styles from "./Product.module.css";
import { toast } from "react-toastify";
function Product({ id, title, price, img }) {
  const { cart, dispatch } = UseCart();
  return (
    <div className={Styles.product}>
      <img src={img} alt={title} className={Styles.productImage} />
      <p className={Styles.title}>{title}</p>
      <p className={Styles.price}>&#8377;{price}</p>
      <button
        onClick={() => {
          for (let item of cart) {
            if (item.id === id) {
              toast.error("already item exist in cart");
              return;
            }
          }
          const newCart = {
            id: id,
            img: img,
            title: title,
            price: price,
            quantity: 1,
          };
          toast.info("item added!!");
          dispatch({ type: "ADD_ITEM", payload: newCart });
        }}
        className={Styles.addToCartBtn}
      >
        AddToCart
      </button>
    </div>
  );
}

export default Product;

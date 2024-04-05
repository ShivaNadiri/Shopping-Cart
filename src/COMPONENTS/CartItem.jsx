import React from "react";
import { UseCart } from "./ContextProvider";
import Styles from "./CartItem.module.css";
import { ImCross } from "react-icons/im";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
function CartItem({ id, price, quantity, title, img }) {
  const { IncreaseQty, DecreaseQty, RemoveItem } = UseCart();
  //   const TotalAmount = cart.reduce((TotalAmount, item) => {
  //     return TotalAmount + item.price * item.quantity;
  //   });

  return (
    <div className={Styles.cartItem}>
      {/* left div */}

      <div className={Styles.cartLeft}>
        <div className={Styles.cartImage}>
          <img src={img} alt={title} className={Styles.image} />
        </div>
        <h2 className={Styles.title}>{title}</h2>
      </div>

      {/* {right div} */}

      <div className={Styles.cartRight}>
        <div className={Styles.inputQty}>
          <button
            onClick={() => {
              if (quantity > 1) {
                DecreaseQty(id);
              }
              //   DecreaseQty(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span>
            <p className={Styles.displayQty}>{quantity}</p>
          </span>
          <button
            onClick={() => {
              IncreaseQty(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377;{price * quantity}</p>
        <button
          onClick={() => {
            RemoveItem(id);
          }}
        >
          <ImCross />
        </button>
      </div>

      {/* ..................................old code....................... */}
      {/* <p>id:{id}</p>
      <p>
        price:{price}*{quantity}={price * quantity}
      </p>
      <p>title:{title}</p>
      <p>quantity:{quantity}</p>
      <button
        onClick={() => {
          IncreaseQty(id);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          if (quantity > 1) {
            DecreaseQty(id);
          }
          //   DecreaseQty(id);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          RemoveItem(id);
        }}
      >
        RemoveItem
      </button> */}
    </div>
  );
}

export default CartItem;

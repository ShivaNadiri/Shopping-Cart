import { useEffect, useState } from "react";
import Model from "../UI/Model";
import Cart from "./Cart";
import Container from "../UI/Container";
import Styles from "./Header.module.css";
import { BsCartFill } from "react-icons/bs";
import { UseCart } from "./ContextProvider";
function Header() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { cart } = UseCart();
  const TotalQty = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  useEffect(() => {
    if (isModelOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [isModelOpen]);
  return (
    <header className={Styles.header}>
      <Container>
        <nav className={Styles.nav}>
          <h2>MANA_SHOP</h2>
          <button
            onClick={() => {
              setIsModelOpen(true);
            }}
            className={Styles.showCartBtn}
          >
            <span className={Styles.cartIconAndNum}>
              <BsCartFill />
              {TotalQty > 0 && (
                <span className={Styles.number}>{TotalQty}</span>
              )}
            </span>
            <span> Cart</span>
          </button>
        </nav>
      </Container>
      {isModelOpen && (
        <Model setIsModelOpen={setIsModelOpen}>
          <Cart />
        </Model>
      )}
    </header>
  );
}

export default Header;

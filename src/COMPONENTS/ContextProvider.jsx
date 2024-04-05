import { createContext, useReducer } from "react";
import { useContext } from "react";
const myContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INCREASE_QTY": {
      return cart.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "DECREASE_QTY": {
      return cart.map((item) => {
        if (item.id == action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    }
  }

  return;
}
function ContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const IncreaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id: id } });
  };
  const DecreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
  };
  const RemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  return (
    <myContext.Provider
      value={{ cart, dispatch, IncreaseQty, DecreaseQty, RemoveItem }}
    >
      {children}
    </myContext.Provider>
  );
}
export function UseCart() {
  return useContext(myContext);
}
export default ContextProvider;

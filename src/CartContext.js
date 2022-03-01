import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./cartReducer";

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart
      }
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currProduct) => currProduct.name !== product.name
    );
    updatePrice(updatedCart);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart
      }
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total = total + product.price;
    });

    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

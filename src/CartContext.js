import { createContext, useContext } from "react";
import shopReducer, { initialState } from "./cartReducer";

const CartContext = createContext(initialState);

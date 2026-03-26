import { createContext, useContext } from "react";
import { useCart, useShoppingCartlist } from "../hooks/useCart";

//Crear el contexto
const CartContext = createContext();

//Crear el proveedor del contexto
export const CartProvider = ({ children }) => {
    const {isOpen, open, close, toggle} = useCart();
    const { cartList, addToCartlist, updateQuantity, removeFromShoppingCartlist, calculateTotal } = useShoppingCartlist("musicCart");

    return(
        <CartContext.Provider value={{isOpen, open, close, toggle, cartList, addToCartlist, updateQuantity, removeFromShoppingCartlist, calculateTotal}}>
            { children }
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}

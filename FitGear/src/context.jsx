import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const updatedCart = [...state.cartItems, action.payload];
            return {
                ...state,
                cartItems: updatedCart,
                totalQuantity: updatedCart.length,
                totalPrice: updatedCart.reduce((total, item) => total + item.price * item.quantity, 0),
            };
        case 'REMOVE_FROM_CART':
            const filteredCart = state.cartItems.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cartItems: filteredCart,
                totalQuantity: filteredCart.length,
                totalPrice: filteredCart.reduce((total, item) => total + item.price * item.quantity, 0),
            };
        case 'UPDATE_QUANTITY':
            const updatedItems = state.cartItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
            );
            return {
                ...state,
                cartItems: updatedItems,
                totalQuantity: updatedItems.length,
                totalPrice: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0),
            };
        default:
            return state;
    }
};

// Create context
const CartContext = createContext();

// Provider to wrap your application
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use cart context
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export default useCart;

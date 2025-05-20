"use client"

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem } from '@/lib/types';

interface CartState {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
}

interface CartContextType extends CartState {
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string, size?: string, color?: string) => void;
  updateQuantity: (itemId: string, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; size?: string; color?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number; size?: string; color?: string } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload;
      
      // Check if item with same id, size, and color already exists
      const existingItemIndex = state.items.findIndex(
        item => 
          item.id === newItem.id && 
          item.size === newItem.size && 
          item.color === newItem.color
      );

      let updatedItems;
      if (existingItemIndex > -1) {
        // Update quantity if item exists
        updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Add new item
        updatedItems = [...state.items, newItem];
      }

      const itemCount = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        itemCount,
        totalPrice
      };
    }

    case 'REMOVE_FROM_CART': {
      const { id, size, color } = action.payload;
      const updatedItems = state.items.filter(
        item => !(item.id === id && item.size === size && item.color === color)
      );

      const itemCount = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        itemCount,
        totalPrice
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity, size, color } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_FROM_CART', payload: { id, size, color } });
      }

      const updatedItems = state.items.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      );

      const itemCount = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalPrice = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);

      return {
        items: updatedItems,
        itemCount,
        totalPrice
      };
    }

    case 'CLEAR_CART':
      return {
        items: [],
        itemCount: 0,
        totalPrice: 0
      };

    default:
      return state;
  }
};

const initialState: CartState = {
  items: [],
  itemCount: 0,
  totalPrice: 0
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId: string, size?: string, color?: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId, size, color } });
  };

  const updateQuantity = (itemId: string, quantity: number, size?: string, color?: string) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity, size, color } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
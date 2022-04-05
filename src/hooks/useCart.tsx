import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { Product } from "../types/Product.types";

interface ICartContext {
  cartItems: ICartItem[];
  cartQuantity: number;
  cartTotal: number;
  handleAddCartItem: (cart: ICartItem) => void;
  handleQuantity: (cartItemInfo: IIncreaseCartQuantity) => void;
}

interface IIncreaseCartQuantity {
  id: number;
  quantity: number;
}

export interface ICartItem extends Product {
  quantity: number;
}

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleQuantity = useCallback(
    ({ id, quantity }: IIncreaseCartQuantity) => {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity };
        }
        return cartItem;
      });
      setCartItems(newCartItems);
    },
    [cartItems]
  );

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0);
  }, [cartItems]);

  const cartQuantity = useMemo(() => {
    const getCartQuantity = cartItems.reduce((prevState, accumulator) => {
      return prevState + accumulator.quantity;
    }, 0);

    return getCartQuantity;
  }, [cartItems]);

  const handleAddCartItem = useCallback(
    (cartItem: ICartItem) => {
      const findProductItem = cartItems.find((item) => cartItem.id === item.id);

      if (findProductItem) {
        findProductItem.quantity += cartItem.quantity;
        setCartItems((prevState) => {
          const filteredCart = prevState.filter(
            (item) => item.id !== findProductItem.id
          );

          return [...filteredCart, findProductItem];
        });
        return;
      }

      setCartItems((prevState) => [...prevState, cartItem]);
    },
    [cartItems]
  );

  return (
    <>
      <CartContext.Provider
        value={{
          cartTotal,
          handleAddCartItem,
          handleQuantity,
          cartQuantity,
          cartItems,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be whitin in a CartProvider");
  }

  return context;
};

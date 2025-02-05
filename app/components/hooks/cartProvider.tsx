'use client'
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { product } from "@/app/types/product";
import Cookie from 'js-cookie'

type cartItem = {
    product: product,
    count: number
}

interface cartContext {
    items: cartItem[],
    updateCart(product: product, qty: number) : void,
    removeFromCart(product: product): void,
    countAllItems(): number,
    countTotalPrice(): string,
}

const CartContext = createContext<cartContext>({items: [],
    updateCart() {}, 
    removeFromCart() {},
    countAllItems() {
       return 0
    },
    countTotalPrice() {
        return "0"
    },
   })

   const CartProvider = ({children}: {children: ReactNode}) => {
    const [cartItems, setCartItems] = useState<cartItem[]>([])

    useEffect(() => {
        Cookie.set('nike.com', JSON.stringify(cartItems))
    }, [cartItems])
    const removeFromCart = (product: product) => {
        const newProducts = cartItems.filter(
            (item) => item.product._id !== product._id
          );
          setCartItems(newProducts);
      };

    const updateCart = (product: product, qty: number) => {
        const items = [ ...cartItems]
        const index = cartItems.findIndex((item) => product._id === item.product._id)
        if(index === -1) {
            items.push({count: qty, product})
        }else{
            items[index].count += qty
        }

        if(items[index]?.count == 0) {
            removeFromCart(product)
        } else {
            setCartItems(items)
        }

    }
    
    const countAllItems = () => {
        return cartItems.reduce((total, cartItem) => total + cartItem.count, 0)
    }

    const countTotalPrice = () => {
        return cartItems
          .reduce(
            (total, cartItem) =>
              total + cartItem.product.price * cartItem.count,
            0
          )
          .toFixed(2);
      };

    return <CartContext.Provider value={{items: cartItems, updateCart, removeFromCart, countAllItems, countTotalPrice}}>
    {children}
    </CartContext.Provider>
}

export default CartProvider

export const useCart = () => useContext(CartContext)
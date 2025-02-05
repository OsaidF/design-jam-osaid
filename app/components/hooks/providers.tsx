"use client";
import { AuthProvider } from "./authProvider";
import CartProvider from "./cartProvider";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
};

export default Providers;

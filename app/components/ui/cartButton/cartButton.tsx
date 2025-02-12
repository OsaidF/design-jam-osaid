'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import cart from '@/public/product/cartproduct.png'
import { useCart } from '@/app/components/hooks/cartProvider'
import { product } from '@/app/types/product'
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from '../toast'
import { useRouter } from 'next/navigation'

interface props {
    product: product
}

const CartButton: FC<props> = ({product}) => {
    const router = useRouter();
    const { toast } = useToast()
    const {updateCart, items} = useCart()
    const onAddToCartClick = () => {
        updateCart(product, 1)
        toast({title: `${product.productName}`,
              description: `${product.productName} was added to the cart`,
              action: <ToastAction altText='Go to cart' onClick={() => router.push('/cart')}>Go to cart</ToastAction>
        })
  }
  return (
    <button onClick={onAddToCartClick} className="flex gap-3 w-[400px] h-[50px] items-center justify-center text-lg font-medium bg-zinc-950 text-white pl-5 pr-5 pt-2 pb-2 rounded-[30px] hover:bg-zinc-800 sm:w-[95vw] md:w-[95vw]"
    >
    <Image src={cart} alt="cart" />
    Add To Bag</button>
  )
}

export default CartButton
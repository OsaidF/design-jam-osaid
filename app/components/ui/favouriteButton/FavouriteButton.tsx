"use client";
import React, { FC, useState, useEffect, FormEvent } from "react";
import { product } from "@/app/types/product";
import { Heart, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../toast";
import { useRouter } from "next/navigation";

interface props {
  product: product;
}

const CartButton: FC<props> = ({ product }) => {
  let [favourites, setFavourites] = useState<any>([]);
  let [added, setAdded] = useState(false);
  let [loading, setLoading] = useState(false);
  const { toast } = useToast()
  const { data: session, update } = useSession();
  const router = useRouter()
  useEffect(() => {
    if (session?.user.favourites) {
      let result = session.user.favourites.filter((e) => {
        return e._ref === product._id;
      });

      if (result.length == 0) {
        setAdded(false);
      } else {
        setAdded(true);
      }
    }
  }, [session]);

  useEffect(() => {
    if (session?.user.favourites == null) {
      setFavourites([]);
    } else {
      setFavourites([...session.user.favourites]);
    }
  }, [session]);

  const onFavClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (session?.user) {
      try {
        setLoading(true);
        const formData = new FormData(event.currentTarget);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/favourite`,
          {
            _ref: product._id,
            type: "product",
            UserID: session.user._id,
          }
        );
        if (res.status === 201) {
          update({
            favourites: [
              ...favourites,
              { _ref: product._id, type: "reference", _key: "any" },
            ],
          });
          setLoading(false);
          toast({
            title: `${product.productName}`,
            description: `${product.productName} was added to favourites!`,
            action: <ToastAction altText='Go to cart' onClick={() => router.push('/signin')}>Log In</ToastAction>
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      toast({
        title: 'You need to be logged in to add items to favourites',
        action: <ToastAction altText='Go to cart' onClick={() => router.push('/signin')}>Log In</ToastAction>

      })
    }
  };
  console.log(session?.user);
  return (
    <>
      {added ? (
        // IF THE FAVOURITE IS ALEADY ADDED IT GIVES THE OPTION TO GO TO FAVOURITES PAGE OR DELETE FROM FAVOURITES
        <div className="flex gap-[5px]">
        <Link
          href={"/favourites"}
          className="flex gap-3 w-[325px] h-[50px] items-center justify-center text-lg font-medium bg-red-500 text-white border-2 border-red-500 mt-3 pl-5 pr-5 pt-2 pb-2 rounded-[30px] hover:bg-red-400 sm:w-[75vw] md:w-[75vw]"
        >
          <Heart fill="white" />
          Added To Favourites
        </Link>
        <button className="flex gap-3 w-[70px] h-[50px] items-center justify-center text-lg font-medium bg-white text-black border-2 border-black mt-3 pl-5 pr-5 pt-2 pb-2 rounded-[30px]">
        <Trash2 />
        </button>
        </div>
      ) : (
        <>
        {/* SUBMIT FORM TO ADD FAVOURITE TO A USER ACCOUNT */}
          <form onSubmit={onFavClick}>
            <button className="flex gap-3 w-[400px] h-[50px] items-center justify-center text-lg font-medium bg-white text-red-500 border-2 border-red-500 mt-3 pl-5 pr-5 pt-2 pb-2 rounded-[30px] hover:bg-slate-100 sm:w-[95vw] md:w-[95vw]">
              {loading ? (
                <svg
                  className="h-5 w-5 animate-spin text-black motion-reduce:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>
                  <Heart /> Add To Favourites
                </>
              )}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default CartButton;

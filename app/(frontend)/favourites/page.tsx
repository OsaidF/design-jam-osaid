"use client";
import Favourites from "@/app/libs/favourites";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProductCard from "@/app/components/ui/productCard/productCard";

export default function page() {
  let [favourites, setFavourites] = useState<any>([]);
  const { status, data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      const fetchFavs = async () => {
        const favourites = await Favourites(session!.user.email);
        return setFavourites(favourites[0].favourites);
      };
      fetchFavs();
    }
  }, [session]);

  return (
    <div className="flex justify-center min-h-[100vh]">
      <div className="max-w-[1400px] w-[1000px] p-5">
        <h1 className="text-2xl">Favourites</h1>
        {status == "unauthenticated" && (
          <div className="flex flex-col items-center justify-center h-[70vh] w-full bg-slate-200 mt-2">
            <h2>Login in to see the items you have favourited.</h2>
            <Link href={"/signin"}>
              <button className="bg-black w-auto font-medium text-white rounded-[30px] p-3 pl-7 pr-7 mt-3 hover:bg-zinc-800">
                Sign Up Now
              </button>
            </Link>
          </div>
        )}

        {status == "loading" && <div className="flex flex-col items-center justify-center h-[70vh] w-full bg-slate-200 mt-2">
            <h2>Loading...</h2>
          </div>}

        {status == "authenticated" && (
          <div>
            <div className="flex w-[1000px] flex-wrap gap-3 pt-[25px] sm:w-[95vw] sm:justify-center md:w-[95vw] md:justify-center">
              {favourites ? (
                favourites.map((i: any) => (
                  <ProductCard product={i} key={Math.random()} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-[70vh] w-[1000px] bg-slate-200 mt-2">
                  <h2>Add items to your favourites to see them here.</h2>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

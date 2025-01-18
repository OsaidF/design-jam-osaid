import React from "react";
import Image from "next/image";
import cart from '@/public/product/cartproduct.png'
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

//QUERY TO FETCH THE PRODUCT
const PRODUCT_QUERY = defineQuery(`*[
  _type == "product" && _id == $id]{
  _id, productName, category, colors, price, inventory, image, description, status
  }`)

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  // FETCHING PRODUCT USING _ID
  const {data: product} = await sanityFetch({query: PRODUCT_QUERY, params: await params})
  // CREATING A PRODUCT OBJECT
  const { productName, price, image } = product[0]

  return (
    <div className="flex justify-center min-h-[100vh] w-full sm:min-h-fit md:min-h-fit">
      <div className="flex w-full max-w-[1440px] mt-[48px] h-[900px] sm:flex-col sm:w-[95vw] sm:mt-1 sm:h-auto md:flex-col md:h-auto">
        <div className="flex w-1/2 min-w-[592px] height-auto  sm:min-w-[95vw]">
          <Image
            src={urlFor(image).width(592).height(592).url()} width={592} height={592}
            alt="Image"
            className="max-w-[592px] max-h-[592px]  sm:w-[95vw] sm:h-auto"
          />  
        </div>
        <div className="flex flex-col items-center w-1/2 pt-[30px]  sm:w-[95vw] sm:h-auto sm:pb-[30px] md:w-[95vw] md:pb-[30px]">
            <div className="w-full pl-4">
                <h1 className="text-5xl font-medium">{productName}</h1>
                <p className="pt-[34px]">
                Turn style on its head with this crafted take on the Air Jordan 1
                Mid. Its "inside out"-inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this release an
                artisan finish.
                </p>

                <h1 className="text-4xl font-medium pt-[32px] pb-[24px]">₹&nbsp;{price}</h1>
                <Link href={"/cart"}>
                  <button className="flex gap-3 bg-zinc-950 text-white pl-5 pr-5 pt-2 pb-2 rounded-[30px] hover:bg-zinc-800"
                  >
                  <Image src={cart} alt="cart" />
                  Add To Cart</button>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

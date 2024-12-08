import React from "react";
import products from "@/app/data/products";
import Image from "next/image";
import cart from '@/public/product/cartproduct.png'

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  let result = products.filter((obj) => obj.id.toString() === id);
  return (
    <div className="flex justify-center min-h-[100vh] w-full sm:min-h-auto">
      <div className="flex w-full max-w-[1440px] mt-[48px] ml-[120px] mr-[120px] h-[900px] sm:flex-col sm:w-[95vw] sm:mt-1 sm:h-auto">
        <div className="flex w-1/2 min-w-[592px] height-auto  sm:min-w-[95vw]">
          <Image
            src={result[0].img}
            alt="Image"
            className="w-[592px] h-[592px] sm:w-[95vw] sm:h-auto"
          />
        </div>
        <div className="flex flex-col items-center w-1/2 pt-[30px]  sm:w-[95vw] sm:h-auto sm:pb-[30px]">
            <div className="max-w-[350px]">
                <h1 className="text-5xl font-medium">{result[0].name}</h1>
                <p className="pt-[34px]">
                Turn style on its head with this crafted take on the Air Jordan 1
                Mid. Its "inside out"-inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this release an
                artisan finish.
                </p>

                <h1 className="text-4xl font-medium pt-[32px] pb-[24px]">₹&nbsp;{result[0].price}</h1>
                <button className="flex gap-3 bg-zinc-950 text-white pl-5 pr-5 pt-2 pb-2 rounded-[30px] hover:bg-zinc-800"
                >
                <Image src={cart} alt="cart" />
                Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

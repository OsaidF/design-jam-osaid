import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { urlFor } from "@/sanity/lib/image";
import { product } from "@/app/types/product";

interface props {
  product: product;
}

const ProductCard: FC<props> = ({ product }) => {
return (
    <Link
      href={`/all-products/${product._id}`}
      className="flex w-[32%] sm:w-[95vw] sm:justify-center"
      key={product._id}
    >
      <div
        className="flex flex-col max-w-[350px] max-h-[500px] h-min hover:bg-gray-100 pb-3 
          rounded-md product sm:max-w-[95vw] sm:max-h-fit overflow-hidden"
      >
        <Image
          src={urlFor(product.image).width(500).height(500).url()}
          width={323}
          height={323}
          alt="Product Image"
          className="sm:w-[95vw] h-auto"
        />
        <div className="pl-3">
          <h3 className="font-medium text-orange-700">{product.status}</h3>
          <h3 className="font-medium productTitle">{product.productName}</h3>
          <h3 className="font-medium text-gray-500 first-letter:capitalize">
            {product.gender ===  "unisex"
              ? product.gender + " " + product.category
              : product.gender + "'s " + product.category}
          </h3>
         
          <ul className="flex font-medium text-gray-500 ">
          <h3 className="font-medium text-black pr-2">Colors: </h3>
            {
          product.colors.length > 1 ?
          product.colors.map((i) => 
            <li className="after:content-[','] after:pr-1 last:after:content-['']" key={i}>{i} 
            </li>
         ) :
          product.colors
          }</ul>
          <h3 className="font-medium pt-3">MRP: ₹&nbsp;{product.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
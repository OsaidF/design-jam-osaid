import React from "react";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import CartButton from "@/app/components/ui/cartButton/cartButton";
import type { Metadata } from "next";
import Review from "@/app/components/ui/review/review";
import FavouriteButton from "@/app/components/ui/favouriteButton/FavouriteButton";
import RelatedProducts from "@/app/components/ui/relatedProducts/relatedProducts";

//QUERY TO FETCH THE PRODUCT
const PRODUCT_QUERY = defineQuery(`*[
  _type == "product" && _id == $id]{
  _id, productName, category, colors, price, gender, reviews, inventory, image, description, status
  }`);

// PARAMS PROPS
type paramsType = Promise<{ id: string }>;
type metadataProps = {
  params: Promise<{ id: string }>;
};

// FETCH FUNCTION TO GET DATA
async function getPost(params: paramsType) {
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });
  return product;
}

// DYNAMICALLY GENERATING METADATA
export async function generateMetadata({
  params,
}: metadataProps): Promise<Metadata> {
  // USING FETCH FUNCTION TO GENERATE
  const product = await getPost(params);
  return {
    title: product[0].productName,
    description: product[0].description,
    openGraph: {
      title: product[0].productName,
      description: product[0].description,
      images: product[0].image,
    },
  };
}

export default async function Page(props: { params: paramsType }) {
  // USING FETCH FUNCTION TO DISPLAY DATA ON PAGE
  const product = await getPost(props.params);
  // CREATING A PRODUCT OBJECT
  const {
    productName,
    price,
    gender,
    reviews,
    category,
    image,
    colors,
    description,
  } = product[0];

  return (
    <div className="flex items-center flex-col min-h-[100vh] w-full sm:min-h-fit md:min-h-fit">
      <div className="flex justify-center w-full pb-16 sm:w-[100vw] md:w-[100vw]">
        <div className="flex w-full max-w-[1000px] mt-[48px] h-auto sm:flex-col sm:w-[95vw] sm:mt-1 sm:h-auto md:flex-col md:h-auto md:items-center">
          <div className="flex w-1/2 height-auto  sm:min-w-[95vw] md:w-[95vw] md:justify-center">
            <Image
              src={urlFor(image).width(1000).height(1000).url()}
              width={500}
              height={500}
              alt="Image"
              className="max-w-[500px] w-auto h-auto max-h-[500px]  sm:w-[95vw] sm:h-auto md:w-[95vw]"
              priority
            />
          </div>
          <div className="flex flex-col items-center w-1/2 pt-[30px]  sm:w-[95vw] sm:h-auto sm:pb-[30px] md:w-[95vw] md:pb-[30px]">
            <div className="w-full pl-4 sm:pl-0 md:pl-0">
              <h1 className="text-5xl w-[400px] font-medium sm:w-[95vw] md:w-[95vw] prose-h1:">
                {productName}
              </h1>
              <h3 className="font-medium text-xl text-gray-500 pt-[10px] first-letter:capitalize">
                {gender === "unisex"
                  ? gender + " " + category
                  : gender + "'s " + category}
              </h3>
              <p className="w-[400px] pt-[10px] sm:w-[95vw] md:w-[95vw] font-medium prose">
                {description}
              </p>
              <h1 className="flex gap-2 text-gray-600 text-lg pt-2 pb-2">
                <span className="text-black">Colors:</span>
                {colors.map((i: any) => (
                  <p key={i} className="after::contents-['/']">
                    {i}
                  </p>
                ))}
              </h1>
              <Review reviews={reviews} />
              <h1 className="text-4xl font-medium pt-[32px] pb-[24px]">
                ₹&nbsp;{price}
              </h1>
              <CartButton product={product[0]} />
              <FavouriteButton product={product[0]} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts category={category} />
    </div>
  );
}

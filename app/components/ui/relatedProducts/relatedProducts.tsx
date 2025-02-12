'use client'
import { product } from '@/app/types/product';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../carousel';
import Link from 'next/link';
import Image from 'next/image';
import Related from '@/app/libs/related';
import { urlFor } from '@/sanity/lib/image';

const RelatedProducts = (props: {category: string}) => {
    let [related, setRelated] = React.useState<product[] | never[]>([]);
    let [error, setError] = React.useState<null | string>()
    
    React.useEffect(() => {
      let getdata = async () => {
        try {
            let data = await Related(props.category);
            setRelated(data);
        } catch (error) { 
            setError((error as Error).message)
        }
      };
      getdata();
    }, []);
    return (
      <div className="text-xl p-3 mt-5 mb-10 md:mb-3">
        <h1 className='text-2xl'>Related Products</h1>
        {related.length > 0 ?
        <Carousel className="max-w-[1400px] w-[calc(100vw-95px)] relative md:w-[95vw]">
          <CarouselContent className="-ml-2">
            {related.map((i: product) => (
              <CarouselItem className="h-auto bg-white basis-1/3 md:basis-full sm:basis-full" key={i._id}>
              <Link href={`/all-products/${i._id}`}>
                <div className="p-1">
                  <Image src={urlFor(i.image).width(500).height(500).url()} alt={i.productName} width={500} height={300} className="w-[calc(100vw-90px/3)] md:w-[95vw]"></Image>
                  <h2 className="font-medium text-base">{i.productName}</h2>
                  <div className="flex justify-between w-full">
                    <h3 className="font-medium text-base text-gray-500 first-letter:capitalize">
                    {i.gender ===  "unisex"
                      ? i.gender + " " + i.category
                      : i.gender + "'s " + i.category}
                    </h3>
                    <h3 className="text-base text-black">MRP: ₹&nbsp;{i.price}</h3>
                  </div>
                </div>
              </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-[-20px] left-[calc(100vw-180px)] bg-slate-200 md:left-[calc(100vw-100px)]"  />
          <CarouselNext className="absolute top-[-20px] right-[0px] bg-slate-200 p-2" />
        </Carousel>
        :
        <div className='flex flex-col gap-3 w-full items-center justify-center min-h-[200px] h-auto'>
            {error &&
            <>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>Error fetching related products</h1>
            <h1 className='text-red-600 p-3 pl-6 pr-6 bg-red-100 rounded-full sm:w-[95vw] overflow-hidden'>{error}</h1>  
            </>}
        </div>
        }
      </div>
    );
  }
export default RelatedProducts
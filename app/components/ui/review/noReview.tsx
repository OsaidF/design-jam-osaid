import React from 'react'
import { Star } from "lucide-react";

export default function NoReview() {
  return (
    <div>
        <div className="flex relative mt-2 cursor-pointer group">
        {Array.from({ length: 5 }, () => (
          <Star className="text-black" strokeWidth={2} key={Math.random()} />
        ))}
        <div>
                <h1 className="font-semibold text-lg pl-2 group-hover:underline"> No Reviews </h1>
              </div>
      </div>
    </div>
  )
}

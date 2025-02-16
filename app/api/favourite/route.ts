import { addFavourites, removeFavourites } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try{
        const {_ref, _type, UserID } = await request.json();

        const data = await addFavourites(_ref, _type, UserID)
        return NextResponse.json(
            { ...data },
            { status: 201 }
          );
    } catch(error){
        throw new Error('Error')
    }
}


export async function DELETE(request: Request) {
    try{
        const {_key, UserID } = await request.json();
        const data = await removeFavourites(_key, UserID)
        
        return NextResponse.json(
            { data },
            { status: 201 }
          );
    } catch(error){
        throw new Error('Error')
    }
}
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { client, createUser } from "@/sanity/lib/client";
import { User } from "@/app/types/user";


export async function POST(request: Request) {
    try {
      const { firstName, lastName, email, password, gender, dateOfBirth, country } = await request.json();
      if (password.length < 6) {
        return NextResponse.json(
          { message: "Password must be at least 6 characters" },
          { status: 400 }
        );
      }

      const userFound = await client.fetch(`*[_type == 'user' && email match $email]`,
          {email: email}, 
          {cache: "no-cache" , next: { revalidate: 0} })

      console.log(userFound)

      if (userFound.length !== 0) {
        return NextResponse.json(
          { message: "Email already exists"},
          { status: 409 }
        );
      }
       const hashedPassword = await bcrypt.hash(password, 12);
  
       const user: User = { 
        firstName: firstName, 
        lastName: lastName, 
        email: email, 
        password: hashedPassword, 
        gender: gender, 
        dateOfBirth: dateOfBirth, 
        country: country, 
        _type: "user" };
  
        const data = await createUser(user)

      return NextResponse.json(
        { ...data },
        { status: 201 }
      );
  
      
    } catch (error) {
        return NextResponse.json(
          {message: 'Server Error'},
          {status: 500}
        );
      }
}
  
  

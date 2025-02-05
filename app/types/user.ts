import { product } from "./product";

export interface User {
    firstName: string,
    lastName: string,
    password: string,
    gender: string,
    dateOfBirth: Date,
    country: string,
    email: string,
    favourites?: product[] 
    _type: string,
}
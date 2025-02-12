import { getFavourites } from "@/sanity/lib/client";

export default function Favourites(email: string) {
    let favourites = getFavourites(email)
    return favourites
}
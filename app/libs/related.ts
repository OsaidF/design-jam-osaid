import { getRelated } from "@/sanity/lib/client";

export default function Related(category: string) {
    try {
        let favourites = getRelated(category)
        return favourites
    } catch (error) {
        new Error('Error fetching related products')
    }
}
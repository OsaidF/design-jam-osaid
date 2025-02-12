import { getFrontPage } from "@/sanity/lib/client";

export default function frontPage() {
    let frontPageData = getFrontPage()
    return frontPageData
}
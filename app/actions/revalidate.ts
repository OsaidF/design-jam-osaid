"use server";
import { revalidatePath } from "next/cache";

export default async function revalidatePathFunction(path: string) {
    revalidatePath(path)   
}
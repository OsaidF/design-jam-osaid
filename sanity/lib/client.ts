import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import { User } from '@/app/types/user'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export async function createUser(user: User) {
  const result = client.create(user)
  return result
}

export async function getUserByEmail(email: string) {
  const result = await client.fetch(`*[_type == 'user' && email == $email]{
      _createdAt,
      _updatedAt,
      _id,
      firstName,
      lastName,
      gender,
      email,
      password,
      dateOfBirth,
      favourites[],
        }`,
    {email: email}, 
    {cache: "no-cache" , next: { revalidate: 1} })
  return result
}

export async function getFavourites(email: string) {
  const result = await client.fetch(`*[_type == "user" && email == $email ]{
  favourites[]-> }`,{email: email},{cache: "no-cache" , next: { revalidate: 1}})
  return result
}

export async function getFavourite(email: string) {
  const result = await client.fetch(`*[_type == "user" && email == $email]`, {email: email,}, { cache: "no-store" })
  return result
}

export async function addFavourites(_ref: string, _type: string, UserID: string) {
  const result = await client.patch(UserID)
  .setIfMissing({favourites: []})
  .append('favourites', [{_ref, _type}])
  .commit({autoGenerateArrayKeys: true})
  return result
}


export async function getFrontPage() {
  const result = await client.fetch(`*[_type == "frontpage"]{
    women[]->,
    men[]->,
    airmax[]->
   }`)
  return result
}

export async function getRelated(category: string) {
  const result = await client.fetch(`*[_type == "product" && category == $category][0...3]`, { category: category })
  return result
}
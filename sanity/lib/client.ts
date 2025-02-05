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
  const result = await client.fetch(`*[_type == 'user' && email == $email]`, {email: email})
  return result
}

import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      _id: string,
      firstName: string,
      lastName: string,
      gender: string,
      coutry: string,
      email: string,
      dateOfBirth: string,
      favourites: favourites[],
    }  & DefaultSession["user"]
  }
}

interface favourites {
  _key?: string,
  _ref: string,
  _type: string
}
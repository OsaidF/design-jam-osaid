import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { userSchema } from './user'
import { frontPageSchema } from './frontpage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, userSchema, frontPageSchema],
}

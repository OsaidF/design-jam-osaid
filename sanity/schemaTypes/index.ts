import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './products'
import { userSchema } from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, userSchema],
}

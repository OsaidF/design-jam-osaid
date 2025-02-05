export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "gender",
      title: "gender",
      type: "string",
      options: {
        list: [
          { title: "men", value: "men" },
          { title: "women", value: "women" },
          { title: "unisex", value: "unisex" },
        ],
      },
    },
    {
      name: "reviews",
      title: "reviews",
      type: 'array',
      of: [
        {
          title: "review",
          type: "object",
          fields: [
            {title: "user", name: "user", type: "reference", to: [{type: "user"}]},
            {title: "rating", name: "rating", type: "number"},
            {title: "review", name: "review", type: "string"}
          ]
        }
        
      ],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image", // Using Sanity's image type for image field
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

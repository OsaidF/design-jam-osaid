export const frontPageSchema = {
    name: 'frontpage',
    title: 'frontpage',
    type: "document",
    fields: [
       {
        name: 'airmax',
        title: 'airmax',
        type: 'array',
        of: [{
            type: "reference",
          to: [{type: "product"}]
        }]

       },{
        name: 'men',
        title: 'men',
        type: 'array',
        of: [{
            type: "reference",
          to: [{type: "product"}]
        }]

       },{
        name: 'women',
        title: 'women',
        type: 'array',
        of: [{
            type: "reference",
          to: [{type: "product"}]
        }]

       },
    ]
} 
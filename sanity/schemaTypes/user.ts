export const userSchema = {
    name: 'user',
    title: 'user',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'email',
            type: 'string',
        },
        {
            name: 'password',
            title: 'password',
            type: 'string',
        },
        {
            name: 'firstName',
            title: 'firstName',
            type: 'string',
        },
        {
            name: 'lastName',
            title: 'lastName',
            type: 'string',
        },
        {
            name: 'dateOfBirth',
            title: 'dateOfBirth',
            type: 'date',
        },
        {
            name: 'country',
            title: 'country',
            type: 'string',
        },
        {
            name: 'gender',
            title: 'gender',
            type: 'string',
        },
    ]
}
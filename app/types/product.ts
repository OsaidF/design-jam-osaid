export interface product {
    _id: string,
    productName: string
    category: string,
    price: number,
    inventory: number,
    gender: string,
    colors: string[],
    reviews?: review[],
    status: string,
    image: string,
  }


  export interface review {
    rating: number,
    review: string,
    user: user,
  }

  export interface user {
    _ref: number
  }
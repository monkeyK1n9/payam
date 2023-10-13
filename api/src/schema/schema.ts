

// Schema building
export const typeDefs = `

  # Product model
  type Product {
    id: ID!
    name: String!
    imageUrl: String!
    amount: Float
    currency: String
  }

  # Query for the products
  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  # The mutation
  type Mutation {
    createProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
    deleteProduct(id: ID!): string
    updateProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
    getProductById(id: ID!): Product
    getProductByName(name: String!): Product
    getProducts(): [Product]
  }
`;
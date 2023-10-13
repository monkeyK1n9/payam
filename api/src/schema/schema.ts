

// Schema building
export const typeDefs = `#graphql

    # Product model
    type Product {
        id: ID
        name: String!
        imageUrl: String!
        amount: Float
        currency: String
    }

    input SearchName {
        name: String!
    }

    input SearchId {
        id: ID
    }

    input NewProduct {
        id: ID
        name: String!
        imageUrl: String!
        amount: Float
        currency: String
    }

    # Query for the products
    type Query {
        getProducts: [Product]
        getProductById(id: SearchId): Product
        getProductByName(name: SearchName): Product
    }

    # The mutation
    type Mutation {
        createProduct(product: NewProduct!): Product
        deleteProduct(id: SearchId): String
        updateProduct(product: NewProduct): Product
    }

`;
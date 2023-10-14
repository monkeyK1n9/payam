

// Schema building
export const typeDefs = `#graphql

    # Product model
    type Product {
        id: Int
        name: String
        imageUrl: String
        amount: Float
        currency: String
    }

    input SearchName {
        name: String
    }

    input SearchId {
        id: Int
    }

    input NewProduct {
        id: Int
        name: String
        imageUrl: String
        amount: Float
        currency: String
    }

    input SearchLimit {
        limit: Float
    }

    input SearchOffset {
        offset: Float
    }

    # Query for the products
    type Query {
        getProducts: [Product]
        getProductById(id: SearchId): Product
        getProductByName(name: SearchName): Product
        getProductsByLimitAndOffset(limit: SearchLimit, offset: SearchOffset): [Product]
    }

    # The mutation
    type Mutation {
        createProduct(product: NewProduct!): Product
        deleteProduct(id: SearchId): String
        updateProduct(product: NewProduct): Product
    }

`;
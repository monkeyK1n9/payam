// # The mutation
//   type Mutation {
//     createProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
//     deleteProduct(id: ID!): string
//     updateProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
//     getProductById(id: ID!): Product
//     getProductByName(name: String!): Product
//     getProducts(): [Product]
//   }
import { knex } from "../../connection.js"

const getProductById = async (id) => {
    const result = await knex.select().from('products').where("id", id);

    return result;
}

const getProductByName = async (name) => {
    const result = await knex.select().from('products').where("name", name);

    return result;
}

const getProducts = async () => {
    const result = await knex.select().from('products');
    return result;
}

export const productResolvers = {
    Query: {
        getProducts: async () => await getProducts(),
        getProductById: async (parent, args, contextValue, info) => await getProductById(args.id),
        getProductByName: async (nparent, args, contextValue, info) => await getProductByName(args.name)
    }
}
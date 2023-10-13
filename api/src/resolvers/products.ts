// # The mutation
//   type Mutation {
//     createProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
//     deleteProduct(id: ID!): string
//     updateProduct(id: ID!, name: String!, imageUrl: String!, amount: Float, currency: String): Product
//     getProductById(id: ID!): Product
//     getProductByName(name: String!): Product
//     getProducts(): [Product]
//   }
const { knex } = require('../../connection')

const createProduct = (id, name, string, imageUrl, amount, currency) => {

}

const deleteProduct = (id) => {

}

const updateProduct = (id, name, string, imageUrl, amount, currency) => {

}

const getProductById = (id) => {

}

const getProductByName = (name) => {

}

const getProducts = async () => {
    const result = await knex.select().from('products')
}

export const productResolvers = {

}

import { knex } from "../../connection.js"

const getProductById = async (id) => {
    const result = await knex('products').select('*').where('id', id.id);

    return result;
}

const getProductByName = async (name) => {
    const result = await knex('products').select('*').where('name', name.name);

    return result;
}

const getProductsByLimitAndOffset = async (limit, offset) => {
    const result = await knex.select('*')
    .from('products')
    .limit(limit.limit)
    .offset(offset.offset)

    return result;
}

const getProducts = async () => {
    const result = await knex('products').select();
    return result;
}

export const productResolvers = {
    Query: {
        getProducts: async () => await getProducts(),
        getProductById: async (parent, args, contextValue, info) => await getProductById(args.id),
        getProductByName: async (parent, args, contextValue, info) => await getProductByName(args.name),
        getProductsByLimitAndOffset: async (parent, args, contextValue, info) => await getProductsByLimitAndOffset(args.limit, args.offset)
    }
}
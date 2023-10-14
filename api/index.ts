import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/schema/schema.js';
import { productResolvers } from './src/resolvers/products.js';
import { knex } from './connection.js'

// create new instance of Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers: productResolvers
});

const createProductsIfNotExists = () => {
    for (let i = 0; i < 500; i++) {
        knex.insert([{name: 'Product ' + i, imageUrl: "https://picsum.photos/id/" + i + "/300", amount: 1000, currency: 'USD'}]).into("products")
        .catch((err) => console.log('failed to create product: ' + err.message))
    }
}

const start = async () => {

    knex.schema.createTable('products', function (table) {
        table.increments('id').primary().notNullable();
        table.string('name', 100);
        table.string('imageUrl');
        table.float('amount');
        table.string('currency', 50);
    })
    .then(() => {
        console.log('created table successfully')

        //create 500 random products on creating the table
        createProductsIfNotExists();
    })
    .catch((err) => console.log('failed to create table: ' + err.message))

    // Spin the server
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    
    console.log(`🚀  Server ready at: ${url}`);
}

start()


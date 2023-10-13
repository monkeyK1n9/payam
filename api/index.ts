import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/schema/schema';
import { productResolvers } from './src/resolvers/products';

// create new instance of Apollo
const server = new ApolloServer({
    typeDefs,
    resolvers: productResolvers,
});

// Spin the server
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
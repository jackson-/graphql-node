const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

import typeDefs from "./api/schema"
import resolvers from "./api/resolvers"

const SERVER = new ApolloServer({ typeDefs, resolvers, playground: {
        settings: {
            "editor.theme": "light"
        }
    } });

const PORT = 4000

const app = express();

app.get("/", (req, res) => res.send("Babel Working!"))

SERVER.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${SERVER.graphqlPath}`))
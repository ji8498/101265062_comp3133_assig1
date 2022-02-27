const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./Schemas.js');
const Resolvers = require('./Resolvers.js');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require("body-parser")


//Store sensetive information to env variables
const dotenv = require('dotenv');
dotenv.config();

const db ='mongodb+srv://jong-in:Whddls!23@cluster0.zoraj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connect = mongoose.connect(db, 
{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
});

connect.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});


const server = new ApolloServer({
      typeDefs: TypeDefs.typeDefs,
      resolvers: Resolvers.resolvers
});




server.applyMiddleware({ app });
app.listen({ port: process.env.PORT }, () =>
  console.log(`connected at http://localhost:${process.env.PORT}${server.graphqlPath}`));
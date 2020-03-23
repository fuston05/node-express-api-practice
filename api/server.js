//express
const express= require('express');
//cors
const cors= require('cors');
//helmet
const helmet= require('helmet');

//define server
const server= express();

//middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

//define routers
const usersRouter= require('../data/usersRouter');

//assign routers
server.use('/api/users', usersRouter);

//handle root request
server.get('/', (req, res) => {
  res.send('<h1>Welcome to my humble server!</h1>');
});

//fallback case
server.use(function notFound(){
  res.status(404).json({error: "We could not find what you are looking for"});
})

//export
module.exports= server;
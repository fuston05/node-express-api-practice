//import express
const express= require('express');

//import shortid.. if needed
const shortid= require('shortid');

// define server
const server= express();
//json middleWare??
server.use(express.json());

//data store
const users= [];

let error= {};

// *************** request endpoints here *************** //

//add a user
server.post('/api/users', (req, res) => {
  if( req.body.name ){
    const user= req.body;
    user.id= shortid();
    users.push(user);
    res.status(201).json(user);
  }else{
    error= {"Error": "Please provide name for the user"}
    res.status(400).json(error);
  }//end if else
});

//get list of all users
server.get('/api/users', (req, res) => {
  error= {"Error": "Uesrs information could not be retrieved"}
  users.length > 0 ? res.status(200).json(users) : res.status(500).json(error);
});

// get a user by ID
server.get('/api/users/:id', (req, res) => {
  error= {"Error": "The user with the specified ID does not exist"}
  const userById= users.filter( user => {
    return user.id === req.params.id;
  } );
  userById !== [] ? res.status(200).json(userById) : res.status(404).json(error);
});

// ***********************••••••••********************* //

//PORT
const PORT= 5000;

//server instanciation
server.listen(PORT, () => {
  console.log( ` \n ** Server is running on http://localhost:${PORT} ** \n ` )
});
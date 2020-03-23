//express
const express= require('express');
//define router
const router= express.Router();

// model
const users= require('./users_model');

//get all users
router.get('/', (req, res) => {
  users.find()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

//get user by id
router.get('/:id', (req, res) => {
  const userId= parseInt(req.params.id);
  users.findById(userId)
  .first()
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

//add new user
router.post('/', (req, res) => {
  const newUser= req.body;
  users.add(newUser)
  .then(newRes => {
    res.status(200).json({message: `New user: ${newUser.name} added successfully`});
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

//update a user
router.put('/:id', (req, res) => {
  const userId= parseInt(req.params.id);
  const user= users.findById(userId);
  const changes= req.body;
  users.update(userId, changes)
  .then(updatedUser => {
    res.status(200).json({message: `User successfully updated`});
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

//delete a user
router.delete('/:id', (req, res) => {
  const delId= parseInt(req.params.id);
  const userToDelete= users.findById(delId);
  users.remove(delId)
  .then(delUser => {
    res.status(200).json({message: `User was successfully deleted`});
  })
  .catch(error => {
    res.status(500).json({error: "Could not process your request"});
  })
});

//export
module.exports= router;
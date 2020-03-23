const db= require('../db_config');

module.exports= {
  find,
  findById,
  add,
  update,
  remove
}

//get all users
function find(){
  return db('users');
}//end find

//find a user
function findById(id){
  return db('users')
  .where({user_id: id});
}//end findById

//add new user
function add(newUser){
  return db('users')
  .insert(newUser);
}//end add

//update user
function update(id, changes){
  return db('users')
  .where({user_id: id})
  .update(changes);
}//end update

//delete user
function remove(id){
  return db('users')
  .where({user_id: id})
  .del();
}//end remove
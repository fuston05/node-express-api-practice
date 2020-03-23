//need knex
const knex= require('knex');
//config
const config= require('./knexfile');
//environment
const environment= process.env.DB_ENV || 'development';

//export
module.exports= knex(config[environment]);
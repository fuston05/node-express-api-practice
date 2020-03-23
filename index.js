//env
require('dotenv').config();

//server
const server= require('./api/server');

//port
const port = process.env.PORT || 5000;

//listen
server.listen(port, () => {
  console.log(` \n ** Running on port:${port} ** \n `);
});
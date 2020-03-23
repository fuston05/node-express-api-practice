
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'user_1', email: 'user_1@email.com'},
        {name: 'user_2', email: 'user_2@email.com'},
        {name: 'user_3', email: 'user_3@email.com'}
      ]);
    });
};

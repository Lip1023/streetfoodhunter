
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'ChanSiuMing', email:'abc@abc.com'},
        {id: 2, name: 'ChanDaiMan', email:'efg@abc.com'},
        {id: 3, name: 'JOHN', email:'john@abc.com'}
      ]);
    });
};

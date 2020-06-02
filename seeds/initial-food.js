
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foodprofile').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodprofile').insert([
        {id: 1, name: 'fishball',city: 'hongkong'},
        {id: 2, name: 'siumai',city: 'hongkong'},
        {id: 3, name: 'pineapplebun',city: 'hongkong'}
      ]);
    });
};

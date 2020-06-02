
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('receipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipe').insert([
        {id: 1, name: 'fishball', cookingtime: "15mins"},
        {id: 2, name: 'fishball', cookingtime: "15mins"},
        {id: 3, name: 'pineapplebun', cookingtime: "30mins"}
      ]);
    });
};

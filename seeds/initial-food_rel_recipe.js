
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foodrelaterecipeTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodrelaterecipeTable').insert([
        {id: 1, food_id: 1, rel_recipeid: 1},
        {id: 2, food_id: 2, rel_recipeid: 2},
        {id: 3, food_id: 4, rel_recipeid: 3},
        {id: 4, food_id: 5, rel_recipeid: 4},
        {id: 5, food_id: 7, rel_recipeid: 5},
        {id: 6, food_id: 10, rel_recipeid: 6},
        {id: 7, food_id: 15, rel_recipeid: 7}
      ]);
    });
};

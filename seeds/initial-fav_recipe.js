
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_recipeTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_recipeTable').insert([
        {id: 1, user_id: 1, recipe_id: 7},
        {id: 2, user_id: 2, recipe_id: 2},
        {id: 3, user_id: 2, recipe_id: 3},
        {id: 4, user_id: 3, recipe_id: 6},
        {id: 5, user_id: 3, recipe_id: 1},
        {id: 6, user_id: 4, recipe_id: 1},
        {id: 7, user_id: 5, recipe_id: 4},
        {id: 8, user_id: 5, recipe_id: 5},
        {id: 9, user_id: 6, recipe_id: 6}
      ]);
    });
};

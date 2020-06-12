
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food_rel_recipeTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('food_rel_recipeTable').insert([
        {id: 1, food_id: 1, recipe_id: 1},
        {id: 2, food_id: 2, recipe_id: 2},
        {id: 3, food_id: 4, recipe_id: 3},
        {id: 4, food_id: 5, recipe_id: 4},
        {id: 5, food_id: 7, recipe_id: 5},
        {id: 6, food_id: 10, recipe_id: 6},
        {id: 7, food_id: 15, recipe_id: 7}
      ]);
    });
};

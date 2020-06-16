
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('food_rel_recipeTable').insert([
        {food_id: 1, recipe_id: 1},
        {food_id: 2, recipe_id: 2},
        {food_id: 4, recipe_id: 3},
        {food_id: 5, recipe_id: 4},
        {food_id: 7, recipe_id: 5},
        {food_id: 10, recipe_id: 6},
        {food_id: 15, recipe_id: 7}
      ]);

};

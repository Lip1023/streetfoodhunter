
exports.seed = function(knex,Promise) {

      // Inserts seed entries
      return knex('fav_recipeTable').insert([
        {user_id: 2, recipe_id: 1},
        {user_id: 2, recipe_id: 4},
        {user_id: 2, recipe_id: 5},
        {user_id: 2, recipe_id: 14},
        {user_id: 3, recipe_id: 2},
        {user_id: 3, recipe_id: 6},
        {user_id: 3, recipe_id: 11},
        {user_id: 3, recipe_id: 15},
        {user_id: 3, recipe_id: 1},
        {user_id: 3, recipe_id: 5},
        {user_id: 4, recipe_id: 3},
        {user_id: 4, recipe_id: 7},
        {user_id: 4, recipe_id: 8},
        {user_id: 4, recipe_id: 16},
        {user_id: 4, recipe_id: 2},
        {user_id: 5, recipe_id: 9},
        {user_id: 5, recipe_id: 12},
        {user_id: 5, recipe_id: 16},
        {user_id: 5, recipe_id: 3},
        {user_id: 5, recipe_id: 7},
        {user_id: 6, recipe_id: 10},
        {user_id: 6, recipe_id: 13},
        {user_id: 6, recipe_id: 15},
        {user_id: 6, recipe_id: 6}
      ]);
    
};

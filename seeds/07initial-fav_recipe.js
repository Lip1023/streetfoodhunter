
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('fav_recipeTable').insert([
        {user_id: 1, recipe_id: 7},
        {user_id: 2, recipe_id: 2},
        {user_id: 2, recipe_id: 3},
        {user_id: 3, recipe_id: 6},
        {user_id: 3, recipe_id: 1},
        {user_id: 4, recipe_id: 1},
        {user_id: 5, recipe_id: 4},
        {user_id: 5, recipe_id: 5},
        {user_id: 1, recipe_id: 6}
      ]);
    
};

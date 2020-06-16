
exports.seed = function(knex) {
  // Deletes ALL existing entries

      return knex('recipe_tagTable').insert([
        {tag_id: 1, recipe_id: 1},
        {tag_id: 2, recipe_id: 2},
        {tag_id: 4, recipe_id: 3},
        {tag_id: 5, recipe_id: 4},
        {tag_id: 7, recipe_id: 5},
        {tag_id: 10, recipe_id: 6},
        {tag_id: 15, recipe_id: 7}
      ]);

};

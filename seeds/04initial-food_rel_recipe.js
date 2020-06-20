
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('food_rel_recipeTable').insert([
    {
      "food_id": 1,
      "recipe_id": 1
    },
    {
      "food_id": 2,
      "recipe_id": 2
    },
    {

      "food_id": 4,
      "recipe_id": 3
    },
    {

      "food_id": 5,
      "recipe_id": 4
    },
    {

      "food_id": 6,
      "recipe_id": 10
    },
    {

      "food_id": 7,
      "recipe_id": 5
    },
    {

      "food_id": 9,
      "recipe_id": 9
    },
    {

      "food_id": 10,
      "recipe_id": 6
    },
    {

      "food_id": 11,
      "recipe_id": 12
    },
    {

      "food_id": 12,
      "recipe_id": 13
    },
    {

      "food_id": 13,
      "recipe_id": 14
    },
    {

      "food_id": 14,
      "recipe_id": 7
    },
    {

      "food_id": 7,
      "recipe_id": 8
    },
    {

      "food_id": 8,
      "recipe_id": 11
    },
    {

      "food_id": 8,
      "recipe_id": 15
    },
    {

      "food_id": 8,
      "recipe_id": 16
    },
    {

      "food_id": 8,
      "recipe_id": 17
    },
    {

      "food_id": 8,
      "recipe_id": 18
    }
  ]);

};

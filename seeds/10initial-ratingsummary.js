
exports.seed = function (knex, Promise) {

  // Inserts seed entries
  return knex('ratingsummaryTable').insert([
    {
      "recipe_id": 1,
      "totalvoters": 99,
      "averagescore": 4.5
    },
    {
      "recipe_id": 2,
      "totalvoters": 50,
      "averagescore": 3.0
    },
    {

      "recipe_id": 3,
      "totalvoters": 40,
      "averagescore": 4.1
    },
    {

      "recipe_id": 4,
      "totalvoters": 30,
      "averagescore": 3.8
    },
    {

      "recipe_id": 5,
      "totalvoters": 60,
      "averagescore": 2.5
    },
    {

      "recipe_id": 6,
      "totalvoters": 55,
      "averagescore": 3.3
    },
    {

      "recipe_id": 7,
      "totalvoters": 38,
      "averagescore": 4.6
    },
    {

      "recipe_id": 8,
      "totalvoters": 20,
      "averagescore": 3.0
    },
    {

      "recipe_id": 9,
      "totalvoters": 15,
      "averagescore": 2.9
    },
    {

      "recipe_id": 10,
      "totalvoters": 66,
      "averagescore": 4.1
    },
    {

      "recipe_id": 11,
      "totalvoters": 55,
      "averagescore": 3.8
    },
    {

      "recipe_id": 12,
      "totalvoters": 34,
      "averagescore": 2.4
    },
    {

      "recipe_id": 13,
      "totalvoters": 105,
      "averagescore": 2.5
    },
    {

      "recipe_id": 14,
      "totalvoters": 80,
      "averagescore": 3.8
    },
    {

      "recipe_id": 15,
      "totalvoters": 90,
      "averagescore": 2.0
    },
    {

      "recipe_id": 16,
      "totalvoters": 43,
      "averagescore": 2.8
    },
    {

      "recipe_id": 17,
      "totalvoters": 58,
      "averagescore": 3.3
    },
    {

      "recipe_id": 18,
      "totalvoters": 65,
      "averagescore": 3.8
    }
  ]);

};

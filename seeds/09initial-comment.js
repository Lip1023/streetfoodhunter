
exports.seed = function (knex, Promise) {

  // Inserts seed entries
  return knex('commentTable').insert([
    {
      "id": 1,
      "user_id": 1,
      "recipe_id": 6,
      "content": "amazing"
    },
    {
      "id": 2,
      "user_id": 2,
      "recipe_id": 2,
      "content": "very helpful"
    },
    {
      "id": 3,
      "user_id": 3,
      "recipe_id": 3,
      "content": "cant get the expected result"
    },
    {
      "id": 4,
      "user_id": 4,
      "recipe_id": 6,
      "content": "not helpful"
    },
    {
      "id": 5,
      "user_id": 5,
      "recipe_id": 1,
      "content": "didnt work"
    },
    {
      "id": 6,
      "user_id": 4,
      "recipe_id": 1,
      "content": "super easy and delicious"
    },
    {
      "id": 7,
      "user_id": 4,
      "recipe_id": 4,
      "content": "taste super good"
    },
    {
      "id": 8,
      "user_id": 2,
      "recipe_id": 5,
      "content": "not detailed enough"
    },
    {
      "id": 9,
      "user_id": 1,
      "recipe_id": 6,
      "content": "thank you so much! this is very easy to follow"
    },
    {
      "id": 10,
      "user_id": 2,
      "recipe_id": 1,
      "content": "this recipe is awesome"
    },
    {
      "id": 11,
      "user_id": 3,
      "recipe_id": 2,
      "content": "i failed with this recipe"
    },
    {
      "id": 12,
      "user_id": 4,
      "recipe_id": 3,
      "content": "do not use this recipe"
    },
    {
      "id": 13,
      "user_id": 2,
      "recipe_id": 4,
      "content": "easy and helpful"
    },
    {
      "id": 14,
      "user_id": 2,
      "recipe_id": 5,
      "content": "taste different from what i had before"
    },
    {
      "id": 15,
      "user_id": 3,
      "recipe_id": 6,
      "content": "this recipe is awesome"
    },
    {
      "id": 16,
      "user_id": 4,
      "recipe_id": 7,
      "content": "i failed with this recipe"
    },
    {
      "id": 17,
      "user_id": 4,
      "recipe_id": 8,
      "content": "do not use this recipe"
    },
    {
      "id": 18,
      "user_id": 5,
      "recipe_id": 9,
      "content": "easy and helpful"
    },
    {
      "id": 19,
      "user_id": 6,
      "recipe_id": 10,
      "content": "taste different from what i had before"
    },
    {
      "id": 20,
      "user_id": 3,
      "recipe_id": 11,
      "content": "this recipe is awesome"
    },
    {
      "id": 21,
      "user_id": 5,
      "recipe_id": 12,
      "content": "i failed with this recipe"
    },
    {
      "id": 22,
      "user_id": 6,
      "recipe_id": 13,
      "content": "do not use this recipe"
    },
    {
      "id": 23,
      "user_id": 2,
      "recipe_id": 14,
      "content": "easy and helpful"
    },
    {
      "id": 24,
      "user_id": 3,
      "recipe_id": 15,
      "content": "taste different from what i had before"
    },
    {
      "id": 25,
      "user_id": 4,
      "recipe_id": 16,
      "content": "this recipe is awesome"
    },
    {
      "id": 26,
      "user_id": 5,
      "recipe_id": 17,
      "content": "i failed with this recipe"
    },
    {
      "id": 27,
      "user_id": 6,
      "recipe_id": 18,
      "content": "do not use this recipe"
    },
    {
      "id": 28,
      "user_id": 3,
      "recipe_id": 1,
      "content": "easy and helpful"
    },
    {
      "id": 29,
      "user_id": 4,
      "recipe_id": 2,
      "content": "taste different from what i had before"
    },
    {
      "id": 30,
      "user_id": 5,
      "recipe_id": 3,
      "content": "this recipe is awesome"
    },
    {
      "id": 31,
      "user_id": 2,
      "recipe_id": 4,
      "content": "i failed with this recipe"
    },
    {
      "id": 32,
      "user_id": 3,
      "recipe_id": 5,
      "content": "do not use this recipe"
    },
    {
      "id": 33,
      "user_id": 6,
      "recipe_id": 6,
      "content": "easy and helpful"
    },
    {
      "id": 34,
      "user_id": 5,
      "recipe_id": 7,
      "content": "taste different from what i had before"
    },
    {
      "id": 35,
      "user_id": 2,
      "recipe_id": 8,
      "content": "taste different from what i had before"
    },
    {
      "id": 36,
      "user_id": 3,
      "recipe_id": 9,
      "content": "taste different from what i had before"
    },
    {
      "id": 37,
      "user_id": 4,
      "recipe_id": 10,
      "content": "taste different from what i had before"
    },
    {
      "id": 38,
      "user_id": 6,
      "recipe_id": 11,
      "content": "taste different from what i had before"
    },
    {
      "id": 39,
      "user_id": 2,
      "recipe_id": 12,
      "content": "taste different from what i had before"
    },
    {
      "id": 40,
      "user_id": 3,
      "recipe_id": 13,
      "content": "taste different from what i had before"
    },
    {
      "id": 41,
      "user_id": 4,
      "recipe_id": 14,
      "content": "taste different from what i had before"
    },
    {
      "id": 42,
      "user_id": 6,
      "recipe_id": 15,
      "content": "taste different from what i had before"
    },
    {
      "id": 43,
      "user_id": 5,
      "recipe_id": 16,
      "content": "taste different from what i had before"
    },
    {
      "id": 44,
      "user_id": 2,
      "recipe_id": 17,
      "content": "this recipe is awesome"
    },
    {
      "id": 45,
      "user_id": 3,
      "recipe_id": 18,
      "content": "i failed with this recipe"
    },
    {
      "id": 46,
      "user_id": 4,
      "recipe_id": 1,
      "content": "do not use this recipe",
    },
    {
      "id": 47,
      "user_id": 2,
      "recipe_id": 2,
      "content": "easy and helpful"
    },
    {
      "id": 48,
      "user_id": 2,
      "recipe_id": 3,
      "content": "taste different from what i had before"
    },
    {
      "id": 49,
      "user_id": 3,
      "recipe_id": 4,
      "content": "this recipe is awesome"
    },
    {
      "id": 50,
      "user_id": 4,
      "recipe_id": 5,
      "content": "i failed with this recipe"
    },
    {
      "id": 51,
      "user_id": 4,
      "recipe_id": 6,
      "content": "do not use this recipe"
    },
    {
      "id": 52,
      "user_id": 5,
      "recipe_id": 7,
      "content": "easy and helpful"
    },
    {
      "id": 53,
      "user_id": 6,
      "recipe_id": 8,
      "content": "taste different from what i had before"
    },
    {
      "id": 54,
      "user_id": 3,
      "recipe_id": 9,
      "content": "this recipe is awesome"
    },
    {
      "id": 55,
      "user_id": 5,
      "recipe_id": 10,
      "content": "i failed with this recipe"
    },
    {
      "id": 56,
      "user_id": 6,
      "recipe_id": 11,
      "content": "do not use this recipe"
    },
    {
      "id": 57,
      "user_id": 2,
      "recipe_id": 12,
      "content": "easy and helpful"
    },
    {
      "id": 58,
      "user_id": 3,
      "recipe_id": 13,
      "content": "taste different from what i had before"
    },
    {
      "id": 59,
      "user_id": 4,
      "recipe_id": 14,
      "content": "this recipe is awesome"
    },
    {
      "id": 60,
      "user_id": 5,
      "recipe_id": 15,
      "content": "taste different from what i had before"
    },
    {
      "id": 61,
      "user_id": 2,
      "recipe_id": 16,
      "content": "this recipe is awesome"
    },
    {
      "id": 62,
      "user_id": 3,
      "recipe_id": 17,
      "content": "i failed with this recipe"
    },
    {
      "id": 63,
      "user_id": 4,
      "recipe_id": 18,
      "content": "this recipe is awesome"
    },
    {
      "id": 64,
      "user_id": 2,
      "recipe_id": 1,
      "content": "i failed with this recipe"
    },
    {
      "id": 65,
      "user_id": 2,
      "recipe_id": 2,
      "content": "do not use this recipe"
    },
    {
      "id": 66,
      "user_id": 3,
      "recipe_id": 3,
      "content": "easy and helpful"
    },
    {
      "id": 67,
      "user_id": 4,
      "recipe_id": 4,
      "content": "taste different from what i had before"
    },
    {
      "id": 68,
      "user_id": 4,
      "recipe_id": 5,
      "content": "this recipe is awesome"
    },
    {
      "id": 69,
      "user_id": 5,
      "recipe_id": 6,
      "content": "do not use this recipe"
    }
  ]);

};

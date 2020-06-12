
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('commentTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('commentTable').insert([
        {id: 1, user_id: 1, recipe_id:6,content:'amazing'},
        {id: 2, user_id: 2, recipe_id:2,content:'very helpful'},
        {id: 3, user_id: 3, recipe_id:3,content:'cant get the expected result'},
        {id: 4, user_id: 4, recipe_id:6,content:'not helpful'},
        {id: 5, user_id: 5, recipe_id:1,content:'didnt work'},
        {id: 6, user_id: 4, recipe_id:1,content:'super easy and delicious'},
        {id: 7, user_id: 4, recipe_id:4,content:'taste super good'},
        {id: 8, user_id: 2, recipe_id:5,content:'not detailed enough'},
        {id: 9, user_id: 1, recipe_id:6,content:'thank you so much! this is very easy to follow'}
      ]);
    });
};

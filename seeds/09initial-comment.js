
exports.seed = function(knex,Promise) {
  
      // Inserts seed entries
      return knex('commentTable').insert([
        {user_id: 1, recipe_id:6,content:'amazing'},
        {user_id: 2, recipe_id:2,content:'very helpful'},
        {user_id: 3, recipe_id:3,content:'cant get the expected result'},
        {user_id: 4, recipe_id:6,content:'not helpful'},
        {user_id: 5, recipe_id:1,content:'didnt work'},
        {user_id: 4, recipe_id:1,content:'super easy and delicious'},
        {user_id: 4, recipe_id:4,content:'taste super good'},
        {user_id: 2, recipe_id:5,content:'not detailed enough'},
        {user_id: 1, recipe_id:6,content:'thank you so much! this is very easy to follow'}
      ]);

};

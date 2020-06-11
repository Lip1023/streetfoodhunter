
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('commentTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('commentTable').insert([
        {id: 1, user_id: 1, comment:'amazing',rel_recipeid: 6},
        {id: 2, user_id: 2, comment:'very helpful',rel_recipeid: 2},
        {id: 3, user_id: 3, comment:'cant get the expected result', rel_recipeid: 3},
        {id: 4, user_id: 4, comment:'not helpful', rel_recipeid: 6},
        {id: 5, user_id: 5, comment:'didnt work',rel_recipeid: 1},
        {id: 6, user_id: 4, comment:'super easy and delicious',rel_recipeid: 1},
        {id: 7, user_id: 4, comment:'taste super good',rel_recipeid: 4},
        {id: 8, user_id: 2, comment:'not detailed enough',rel_recipeid: 5},
        {id: 9, user_id: 1, comment:'thank you so much! this is very easy to follow',el_recipeid: 6}
      ]);
    });
};

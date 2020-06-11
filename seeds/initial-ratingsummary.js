
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ratingsummaryTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ratingsummaryTable').insert([
        {id: 1, recipe_id: 1,totalvoters: 230,averagescore: 3},
        {id: 2, recipe_id: 2,totalvoters: 50,averagescore: 3.8},
        {id: 3, recipe_id: 3,totalvoters: 80,averagescore: 2.9},
        {id: 4, recipe_id: 4,totalvoters: 75,averagescore: 3.5},
        {id: 5, recipe_id: 5,totalvoters: 33,averagescore: 4.2},
        {id: 6, recipe_id: 6,totalvoters: 60,averagescore: 2.8},
        {id: 7, recipe_id: 7,totalvoters: 25,averagescore: 3.1}
      ]);
    });
};

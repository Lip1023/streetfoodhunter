
exports.seed = function(knex,Promise) {

      // Inserts seed entries
      return knex('ratingsummaryTable').insert([
        {recipe_id: 1,totalvoters: 230,averagescore: 3},
        {recipe_id: 2,totalvoters: 50,averagescore: 3.8},
        {recipe_id: 3,totalvoters: 80,averagescore: 2.9},
        {recipe_id: 4,totalvoters: 75,averagescore: 3.5},
        {recipe_id: 5,totalvoters: 33,averagescore: 4.2},
        {recipe_id: 6,totalvoters: 60,averagescore: 2.8},
        {recipe_id: 7,totalvoters: 25,averagescore: 3.1}
      ]);

};

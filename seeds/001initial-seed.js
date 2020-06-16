
exports.seed = function (knex,Promise) {
  // Deletes ALL existing entries
  // .then(function () {
  //   return knex('commentTable').del()
  // })
  // .then(function () {
  //   return knex('ratingsummaryTable').del()
  // })
  return knex('recipe_tagTable').del()
    .then(function () {
    return knex('ratingsummaryTable').del()
  })
    .then(function () {
      return knex('commentTable').del()
    })
    .then(function () {
      return knex('tagTable').del()
    })
    .then(function () {
      return knex('fav_recipeTable').del()
    })
    .then(function () {
      return knex('howtoTable').del()
    })
    .then(function () {
      return knex('ingredientTable').del()
    })
    .then(function () {
      return knex('food_rel_recipeTable').del()
    })
    .then(function () {
      return knex('recipeTable').del()
    })
    .then(function () {
      return knex('foodTable').del()
    })
    .then(function () {
      return knex('userTable').del()
    })
  // .then(function () {
  //   return knex('howtoTable').del()
  // })
  // .then(function () {
  //   return knex('fav_recipeTable').del()
  // })
  // .then(function () {
  //   return knex('tagTable').del()
  // })
  // .then(function () {
  //   return knex('commentTable').del()
  // })
  // .then(function () {
  //   return knex('ratingsummaryTable').del()
  // })
  // .then(function () {
  //   return knex('recipe_tagTable').del()
  // })

};

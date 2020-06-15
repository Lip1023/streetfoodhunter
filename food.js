require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    }
});

// let result = knex('foodTable').select('*');
// result.then( (data) => {
//     console.log(data);
// });

//food with recipe
let result1 = [];
let promise1 = [null, null];
promise1[0] = knex('food_rel_recipeTable').join('foodTable', 'food_rel_recipeTable.food_id', '=', 'foodTable.id').select('*');
promise1[1] = knex('food_rel_recipeTable').join('recipeTable', 'food_rel_recipeTable.recipe_id', '=', 'recipeTable.id').select('*');
Promise.all(promise1).then( (data) => {
    for (let i = 0; i < data[0].length; i++) {
      let temp1 = {...data[0][i], ...data[1][i]};
      result1.push(temp1);
    }
    // console.log(result1);
});

//full recipe
let result2 = [];
let promise2 = [null, null, null];
promise2[0] = knex('commentTable').select('*');
promise2[1] = knex('recipeTable').join('howtoTable', 'recipeTable.id', '=', 'howtoTable.id').select('*');
promise2[2] = knex('recipeTable').join('ingredientTable', 'recipeTable.id', '=', 'ingredientTable.recipe_id').select('*');
promise2[3] = knex('recipeTable').join('ratingsummaryTable', 'recipeTable.id', '=', 'ratingsummaryTable.recipe_id').select('*');
Promise.all(promise2).then( (data) => {
  for (let i = 0; i < data[1].length; i++) {
    let temp1 = {...data[1][i], ...data[2][i], ...data[3][i]};
    result2.push(temp1);
  }
  result2.forEach((result) => {
    result.comment = [];
  });
  data[0].forEach((data) => {
    result2.forEach((result) => {
      if ( result.recipe_id === data.recipe_id ) {
        result.comment.push(data);
      }
    });
    
  });
  // console.log(result2[0]);
  // let temp3 = temp2.split(/\r\n|\r|\n/g);
});

// let result3 = [];
// let promise3 = knex('recipeTable').join('commentTable', 'recipeTable.id', '=', 'commentTable.recipe_id').select('*');
// promise3.then( (data) => {
//   console.log()
// });
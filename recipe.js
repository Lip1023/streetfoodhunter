const pg = require('pg');                 // not using knex for SQL query
const escape = require('pg-escape');      // use another package to avoid SQL injection
require('dotenv').config();             // https://github.com/segmentio/pg-escape

const config = {
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

//get full recipe
async function readAllRecipes() {
  let client = [];
  let sql = [null, null, null, null];
  for (let i = 0; i < 4; i++) {client.push(new pg.Client(config))};
  sql[0] = 'select * from "commentTable"';
  sql[1] = 'select * from "recipeTable" inner join "howtoTable" on "recipeTable"."id" = "howtoTable"."id"';
  sql[2] = 'select * from "recipeTable" inner join "ingredientTable" on "recipeTable"."id" = "ingredientTable"."recipe_id"';
  sql[3] = 'select * from "recipeTable" inner join "ratingsummaryTable" on "recipeTable"."id" = "ratingsummaryTable"."recipe_id"';
  // let sql4 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
  let temp1 = [null, null, null, null];
  let result1 = [];
  await client[0].connect();
  temp1[0] = await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp1[1] = await client[1].query(sql[1]);
  await client[1].end();
  await client[2].connect();
  temp1[2] = await client[2].query(sql[2]);
  await client[2].end();
  await client[3].connect();
  temp1[3] = await client[3].query(sql[3]);
  await client[3].end();
  let data = temp1.map(x => x.rows);
  for (let i = 0; i < data[1].length; i++) {
    let temp2 = {...data[1][i], ...data[2][i], ...data[3][i]};
    result1.push(temp2);
  }
  result1.forEach((result) => {
    result.how_to = result.howto.split(/\r\n|\r|\n/g);
    delete result.howto;
    result.recipe_rating = Math.floor(result.averagescore * 20);
    result.comment = [];
  });
  data[0].forEach((data) => {
    result1.forEach((result) => {
      if ( result.recipe_id === data.recipe_id ) {
        result.comment.push(data);
      }
    });
  });
  return result1;
};
// let promise1 = readAllRecipes();
// promise1.then((stuff) => {console.log(stuff);});

//get list of all recipes
// {
//     "recipe_id": 0,
//     "recipe_name": "Recipe Name",
//     "users_user_id": "Username",
//     "recipe_image_url": "fishball.jpg",
//     "recipe_rating": '47'
// }
async function readRecipeList() {
  let client = [];
  let sql = [null, null];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  sql[0] = 'select * from "recipeTable" inner join "ratingsummaryTable" on "recipeTable"."id" = "ratingsummaryTable"."recipe_id"';
  sql[1] = 'select "recipeTable"."id", "userTable"."full_name", "userTable"."user_name", "userTable"."email" from "recipeTable" inner join "userTable" on "recipeTable"."admin_id" = "userTable"."id"';
  // let sql4 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
  let temp = [null, null];
  let result2 = [];
  await client[0].connect();
  temp[0] = await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp[1] = await client[1].query(sql[1]);
  await client[1].end();
  let data = temp.map(x => x.rows);
  for (let i = 0; i < data[0].length; i++) {
    let temp1 = {...data[0][i], ...data[1][i]};
    let temp2 = {
      recipe_id: temp1.recipe_id,
      recipe_name: temp1.name,
      users_user_id: temp1.user_name,
      recipe_image_url: temp1.image_url,
      recipe_rating: Math.floor(temp1.averagescore * 20)
    };
    result2.push(temp2);
  }
  return result2;
};
// let promise1 = readRecipeList();
// promise1.then((stuff) => {console.log(stuff);});

//get recipe of a particular ID
async function readRecipeFromID(id) {
  let client = [];
  let sql = [null, null, null, null];
  for (let i = 0; i < 4; i++) {client.push(new pg.Client(config))};
  sql[0] = 'select * from "commentTable"';
  sql[1] = escape('select * from "recipeTable" inner join "howtoTable" on "recipeTable"."id" = "howtoTable"."id" where "recipeTable"."id" = %L', String(id));
  sql[2] = escape('select * from "recipeTable" inner join "ingredientTable" on "recipeTable"."id" = "ingredientTable"."recipe_id" where "recipeTable"."id" = %L', String(id));
  sql[3] = escape('select * from "recipeTable" inner join "ratingsummaryTable" on "recipeTable"."id" = "ratingsummaryTable"."recipe_id" where "recipeTable"."id" = %L', String(id));
  // let sql4 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
  let temp1 = [null, null, null, null];
  let result1 = [];
  await client[0].connect();
  temp1[0] = await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp1[1] = await client[1].query(sql[1]);
  await client[1].end();
  await client[2].connect();
  temp1[2] = await client[2].query(sql[2]);
  await client[2].end();
  await client[3].connect();
  temp1[3] = await client[3].query(sql[3]);
  await client[3].end();
  let data = temp1.map(x => x.rows);
  for (let i = 0; i < data[1].length; i++) {
    let temp1 = {...data[1][i], ...data[2][i], ...data[3][i]};
    result1.push(temp1);
  }
  result1.forEach((result) => {
    result.how_to = result.howto.split(/\r\n|\r|\n/g);
    delete result.howto;
    result.recipe_rating = Math.floor(result.averagescore * 20);
    result.comment = [];
  });
  data[0].forEach((data) => {
    result1.forEach((result) => {
      if ( result.recipe_id === data.recipe_id ) {
        result.comment.push(data);
      }
    });
  });
  return result1[0];
};
// let promise1 = readRecipeFromID(4);
// promise1.then((stuff) => {console.log(stuff);});


//post full recipe
let list1 = 
{
  user_id: '1',
  recipeName: '123',
  cookingTime: '213',
  recipeDescription: 'safcvs',
  recipeIngredients: 'asdasd',
  difficulty: '5',
  recipeHowto: '1\n2\n3\n4\n5',
  recipePhoto: 'https://img.eservice-hk.net/upload/2020/06/14/171818_84064f1756fd535e99fec63b6abfacda.JPG'
}
async function writeRecipe(list1) {
  let recipelist = {
    name: list1.recipeName,
    cookingtime: list1.cookingTime,
    difficulty: list1.difficulty,
    admin_id: list1.user_id,
    draft: 'f',
    appr_status: 'f',
    image_url: list1.recipePhoto
  };
  let promise1 = writeRecipeTable(recipelist);
  promise1.then( async (id) => {
    let ingredientlist = {
      recipe_id: id,
      ingredient: list1.recipeIngredients
    };
    await writeIngredient(ingredientlist);
    let howtolist = {
      recipe_id: id,
      howto: list1.recipeHowto
    };
    await writeHowTo(howtolist);
    await initializeVote(id);
    return true;
  });
}
// let promise1 = writeRecipe(list1);
// promise1.then((stuff) => {console.log(stuff);});

async function writeRecipeTable(list1) {
  let client = [];
  let sql = [null, null];
  let temp1 = null;
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  sql[0] = `SELECT setval(\'"recipeTable_id_seq"\', (SELECT MAX(id) from "recipeTable"));`;
  sql[1] = escape('insert into "recipeTable" ("name", "cookingtime", "difficulty", "admin_id", "draft", "appr_status", "image_url") values (%L, %L, %L, %L, %L, %L, %L) returning "id";', list1.name, list1.cookingtime, list1.difficulty, list1.admin_id, list1.draft, list1.appr_status, list1.image_url);
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp1 = await client[1].query(sql[1]);
  await client[1].end();
  return temp1.rows[0].id;
};

async function writeIngredient(list1) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  sql[0] = `SELECT setval(\'"ingredientTable_id_seq"\', (SELECT MAX(id) from "ingredientTable"));`;
  sql[1] = escape('insert into "ingredientTable" ("recipe_id", "ingredient") values (%L, %L);', String(list1.recipe_id), String(list1.ingredient));
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  await client[1].query(sql[1]);
  await client[1].end();
  return true;
};

async function writeHowTo(list1) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  sql[0] = `SELECT setval(\'"howtoTable_id_seq"\', (SELECT MAX(id) from "howtoTable"));`;
  sql[1] = escape('insert into "howtoTable" ("recipe_id", "howto") values (%L, %L);', String(list1.recipe_id), String(list1.howto));
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  await client[1].query(sql[1]);
  await client[1].end();
  return true;
};

async function initializeVote(recipe_id) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  sql[0] = `SELECT setval(\'"ratingsummaryTable_id_seq"\', (SELECT MAX(id) from "ratingsummaryTable"));`;
  sql[1] = escape('insert into "ratingsummaryTable" ("recipe_id", "totalvoters", "averagescore") values (%L, 0, 0);', String(recipe_id));
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  await client[1].query(sql[1]);
  await client[1].end();
  return true;
};

//post new comment
async function postComment (user_id, recipe_id, comment) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  let temp = null;
  sql[0] = `SELECT setval(\'"commentTable_id_seq"\', (SELECT MAX(id) from "commentTable"));`;
  sql[1] = escape('insert into "commentTable" ("user_id", "recipe_id", "content") values (%L, %L, %L) returning "id";', String(user_id), String(recipe_id), String(comment));
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp = await client[1].query(sql[1]);
  await client[1].end();
  return temp.rows[0].id;
};
// let promise1 = postComment(3,4,"567");
// promise1.then((stuff) => {console.log(stuff);});


//put new vote
async function updateVote(recipe_id, vote) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  let temp = [null, null];
  sql[0] = escape('select "recipe_id", "totalvoters", "averagescore" from "ratingsummaryTable" where "recipe_id" = %L', String(recipe_id));
  await client[0].connect();
  temp[0] = await client[0].query(sql[0]);
  temp[1] = temp[0].rows[0].averagescore * temp[0].rows[0].totalvoters + vote;
  temp[0].rows[0].totalvoters ++;
  temp[0].rows[0].averagescore = Number(temp[1] / temp[0].rows[0].totalvoters).toPrecision(9);
  await client[1].connect();
  sql[1] = escape('update "ratingsummaryTable" set "totalvoters" = %L, "averagescore" = %L where "recipe_id" = %L', String(temp[0].rows[0].totalvoters), String(temp[0].rows[0].averagescore), String(recipe_id));
  await client[1].query(sql[1]);
  await client[0].end();
  await client[1].end();
  return true;
};
// updateVote(7, 5).then((a) => {console.log(a);});

//delete comment
async function deleteComment(commentID) {
  await knex('commentTable').where({ id: commentID }).del()
  .then( () => {return true;})
  .catch((error) => {
    throw error;
  });
}

//user display favourite_recipe
// let result4 = [];
// let promise4 = knex(‘fav_recipeTable’).join(‘userTable’, ‘userTable.id’, ‘=’, ‘fav_recipe.user_id’).select(‘*’);
// promise4.then( (data) => {
//   console.log()
// });

//filter - recipe_tag
// let result5 = [];
// let promise5 = knex(‘recipe_table’).join(‘recipe_tagTable’, ‘recipe_tag.recipe_id’, ‘=’, ‘recipeTable.id’).select(‘*’);
// promise5.then( (data) => {
//   console.log()
// });
//line32//promise2[0] = knex(‘recipeTable.id’).join(‘commentTable’, ‘recipeTable.id’, ‘=’, ‘commentTable.rep_id’).select(‘*’);
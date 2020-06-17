const pg = require('pg');                 // not using knex for SQL query
const escape = require('pg-escape');      // use another package to avoid SQL injection
const Knex = require('knex');
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

//get user name from user ID
async function getUserNameFromID(id) {
  let client = new pg.Client(config);
  let sql = escape('select "user_name" from "userTable" where "id" = %L', String(id));
  await client.connect();
  temp1 = await client.query(sql);
  await client.end();
  return temp1.rows[0].user_name;
}
// let promise1 = getUserNameFromID(1);
// promise1.then((stuff) => {console.log(stuff);});=

//get rating from recipe ID
async function getRatingFromRecipeID(id) {
  let client = new pg.Client(config);
  let sql = escape('select "averagescore" from "ratingsummaryTable" where "recipe_id" = %L', String(id));
  await client.connect();
  temp1 = await client.query(sql);
  await client.end();
  return temp1.rows[0].averagescore;
}
// let promise1 = getRatingFromRecipeID(4);
// promise1.then((stuff) => {console.log(stuff);});

//get full recipe
async function readAllRecipes() {
  let client = [];
  let sql = [null, null, null, null];
  for (let i = 0; i < 4; i++) {client.push(new pg.Client(config))};
  sql[0] = 'select * from "commentTable" inner join "userTable" on "userTable"."id" = "commentTable"."user_id"';
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
    delete data.password;
    delete data.security_answer;
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

//get list of all recipes / recipes by tag name
// {
//     recipe: [{
//     "recipe_id": 0,
//     "recipe_name": "Recipe Name",
//     "users_user_id": "Username",
//     "recipe_image_url": "fishball.jpg",
//     "recipe_rating": '47',
//     "tag": 'Sweet'
//      }, ...
//      ]
// }
async function readRecipeList(tag_name = null, order_by = "New") {
  let client = [];
  let sql = [null, null, null];
  for (let i = 0; i < 3; i++) {client.push(new pg.Client(config))};
  sql[0] = 'select * from "recipeTable" inner join "ratingsummaryTable" on "recipeTable"."id" = "ratingsummaryTable"."recipe_id" order by "recipeTable"."id" asc';
  sql[1] = 'select "recipeTable"."id", "userTable"."full_name", "userTable"."user_name", "userTable"."email" from "recipeTable" inner join "userTable" on "recipeTable"."admin_id" = "userTable"."id" order by "recipeTable"."id" asc';
  sql[2] = 'select "recipeTable"."id", "tagTable"."tag" from "recipe_tagTable" inner join "recipeTable" on "recipeTable"."id" = "recipe_tagTable"."recipe_id" inner join "tagTable" on "tagTable"."id" = "recipe_tagTable"."tag_id" order by "recipeTable"."id" asc';
  // let sql4 = escape('SELECT note, id FROM %I ORDER BY id DESC', who);
  let temp = [null, null, null];
  let result2 = {recipe: []};
  let result3 = {recipe: []};
  await client[0].connect();
  temp[0] = await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp[1] = await client[1].query(sql[1]);
  await client[1].end();
  await client[2].connect();
  temp[2] = await client[2].query(sql[2]);
  await client[2].end();
  let data = temp.map(x => x.rows);
  for (let i = 0; i < data[0].length; i++) {
    let temp1 = {...data[0][i], ...data[1][i], ...data[2][i]};
    let temp2 = {
      recipe_id: temp1.recipe_id,
      recipe_name: temp1.name,
      users_user_id: temp1.user_name,
      recipe_image_url: temp1.image_url,
      recipe_rating: Math.floor(temp1.averagescore * 20),
      tag: temp1.tag
    };
    result2.recipe.push(temp2);
  }
  for (let j = result2.recipe.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      switch (order_by) {
        case 'New':
          if (result2.recipe[i].recipe_id < result2.recipe[i + 1].recipe_id) {
            let temp = result2.recipe[i];
            result2.recipe[i] = result2.recipe[i + 1];
            result2.recipe[i + 1] = temp;
          }
        break;
        case 'Rating':
          if (result2.recipe[i].recipe_rating < result2.recipe[i + 1].recipe_rating) {
            let temp = result2.recipe[i];
            result2.recipe[i] = result2.recipe[i + 1];
            result2.recipe[i + 1] = temp;
          }
        break;
        default:
          if (result2.recipe[i].recipe_name > result2.recipe[i + 1].recipe_name) {
            let temp = result2.recipe[i];
            result2.recipe[i] = result2.recipe[i + 1];
            result2.recipe[i + 1] = temp;
          }
        break;
      }
    }
  }
  if ( (tag_name) && (tag_name.length > 0)) {
    for (let i = 0; i < result2.recipe.length; i++) {
      if (tag_name.toUpperCase() === result2.recipe[i].tag.toUpperCase()) {
        result3.recipe.push(result2.recipe[i]);
      }
    };
    return result3;
  } else {
    return result2;
  };
};
// let promise1 = readRecipeList(null, 'rating');
// promise1.then((stuff) => {console.log(stuff);});

//get recipe of a particular ID
async function readRecipeFromID(id) {
  let client = [];
  let sql = [null, null, null, null];
  for (let i = 0; i < 4; i++) {client.push(new pg.Client(config))};
  sql[0] = escape('select * from "commentTable" inner join "userTable" on "userTable"."id" = "commentTable"."user_id" where "recipe_id" = %L', String(id));
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
    result.difficulty = Math.floor(result.difficulty * 20);
    result.comment = [];
  });
  data[0].forEach((data) => {
    delete data.password;
    delete data.security_answer;
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

// get all comments of a particular user
async function readCommentsByUser(user_id) {
  let client = new pg.Client(config);
  let sql = escape('select * from "commentTable" inner join "recipeTable" on "recipeTable"."id" = "commentTable"."recipe_id" where "user_id" = %L', String(user_id));
  await client.connect();
  let temp1 = await client.query(sql);
  await client.end();
  return temp1.rows;
};
// let promise1 = readCommentsByUser(4);
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
  temp[1] = temp[0].rows[0].averagescore * temp[0].rows[0].totalvoters + Number(vote);
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
  let client = new pg.Client(config);
  let sql = escape('delete from "commentTable" where "id" = %L', String(commentID));
  await client.connect();
  await client.query(sql);
  await client.end();
  return true;
};
// deleteComment(10).then((stuff) => {console.log(stuff);})

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

let userresult= {
  users_user_id: "pullip123",
  recipe:[
  {
   "recipe_id": "1",
   "recipe_name": "Spicy Fishball",
   "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
   "recipe_rating": "74",
   "recipe_difficulty": "90"
  },
  { 
   "recipe_id": "2",
   "recipe_name": "Sweet Fishball",
   "recipe_image_url": "https://i2.wp.com/tasteful.ph/wp-content/uploads/2018/02/fishballMAIN-1.jpg?resize=1080%2C720&ssl=1",
   "recipe_rating": "45",
   "recipe_difficulty": "10"
  },
  { 
  "recipe_id": "3",
  "recipe_name": "Sour Fishball",
  "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
  "recipe_rating": "81",
  "recipe_difficulty": "10"
 }
],

favourite:[
  { 
    "users_user_id": "alex123",
    "recipe_id": "4",
    "recipe_name": "Drunken siumai",
    "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
    "recipe_rating": "74",
    "recipe_difficulty": "50"
   },
   { 
    "users_user_id": "christine123",
    "recipe_id": "5",
    "recipe_name": "Sweet siumai",
    "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
    "recipe_rating": "45",
    "recipe_difficulty": "30"
   },
   {  
   "users_user_id": "tom123",
   "recipe_id": "6",
   "recipe_name": "Sour siumai",
   "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
   "recipe_rating": "81",
   "recipe_difficulty": "70"
  }
]
}

// get MyPage for a particular user
async function getMyPage(id) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  let temp = [null, null];
  let result1 = {recipe: [], favourite: []};
  sql[0] = escape('select * from "recipeTable" inner join "ratingsummaryTable" on "recipeTable"."id" = "ratingsummaryTable"."recipe_id" where "recipeTable"."admin_id" = %L', String(id));
  await client[0].connect();
  temp[0] = await client[0].query(sql[0]);
  await client[1].connect();
  sql[1] = escape('select * from "recipeTable" inner join "fav_recipeTable" on "recipeTable"."id" = "fav_recipeTable"."recipe_id" inner join "userTable" on "recipeTable"."admin_id" = "userTable"."id" inner join "ratingsummaryTable" on "ratingsummaryTable"."recipe_id" = "recipeTable"."id" where "fav_recipeTable"."user_id" = %L', String(id));
  temp[1] = await client[1].query(sql[1]);
  result1.recipe = temp[0].rows;
  result1.favourite = temp[1].rows;
  result1.recipe.forEach( async (result) => {
    result.recipe_name = result.name;
    result.recipe_image_url = result.image_url;
    result.recipe_rating = Math.floor(result.averagescore * 20);
    result.recipe_difficulty = Math.floor(result.difficulty * 20);
  });
  result1.favourite.forEach( async (result) => {
    result.users_user_id = result.user_name;
    result.recipe_rating = Math.floor(result.averagescore * 20);
    result.recipe_name = result.name;
    result.recipe_image_url = result.image_url;
    result.recipe_difficulty = Math.floor(result.difficulty * 20);
    delete result.password;
    delete result.security_answer;
    });
  await client[0].end();
  await client[1].end();
  return result1;
}
// let promise1 = getMyPage(3);
// promise1.then((stuff) => {console.log(stuff);});

// add favourite recipe
async function addFavourite(user_id, recipe_id) {
  let client = [];
  for (let i = 0; i < 2; i++) {client.push(new pg.Client(config))};
  let sql = [null, null];
  let temp = null;
  sql[0] = `SELECT setval(\'"fav_recipeTable_id_seq"\', (SELECT MAX(id) from "fav_recipeTable"));`;
  sql[1] = escape('insert into "fav_recipeTable" ("user_id", "recipe_id") values (%L, %L) ON CONFLICT ("user_id", "recipe_id") DO NOTHING;', String(user_id), String(recipe_id));
  await client[0].connect();
  await client[0].query(sql[0]);
  await client[0].end();
  await client[1].connect();
  temp = await client[1].query(sql[1]);
  await client[1].end();
  return temp.rowCount;
}
// let promise1 = addFavourite(2, 4);
// promise1.then((stuff) => {console.log(stuff);});

// remove favourite recipe
async function deleteFavourite(user_id, recipe_id) {
  let client = new pg.Client(config);
  let sql = escape('delete from "fav_recipeTable" where "user_id" = %L and "recipe_id" = %L', String(user_id), String(recipe_id));
  let temp = null;
  await client.connect();
  temp = await client.query(sql);
  await client.end();
  return temp.rowCount;
}
// let promise1 = deleteFavourite(2, 4);
// promise1.then((stuff) => {console.log(stuff);});

module.exports = {
  getUserNameFromID,
  getRatingFromRecipeID,
  readAllRecipes,
  readRecipeList,
  readRecipeFromID,
  readCommentsByUser,
  writeRecipe,
  writeRecipeTable,
  writeIngredient,
  writeHowTo,
  initializeVote,
  postComment,
  updateVote,
  deleteComment,
  getMyPage,
  addFavourite,
  deleteFavourite
};
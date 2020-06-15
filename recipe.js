require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_NAME,
      user:     process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    }
});

//get full recipe
async function readAllRecipes() {
  let result2 = [];
  let promise2 = [null, null, null, null];
  promise2[0] = await knex('commentTable').select('*');
  promise2[1] = await knex('recipeTable').join('howtoTable', 'recipeTable.id', '=', 'howtoTable.id').select('*');
  promise2[2] = await knex('recipeTable').join('ingredientTable', 'recipeTable.id', '=', 'ingredientTable.recipe_id').select('*');
  promise2[3] = await knex('recipeTable').join('ratingsummaryTable', 'recipeTable.id', '=', 'ratingsummaryTable.recipe_id').select('*');
  await Promise.all(promise2).then( (data) => {
    for (let i = 0; i < data[1].length; i++) {
      let temp1 = {...data[1][i], ...data[2][i], ...data[3][i]};
      result2.push(temp1);
    }
    result2.forEach((result) => {
      result.how_to = result.howto.split(/\r\n|\r|\n/g);
      delete result.howto;
      result.recipe_rating = Math.floor(result.averagescore * 20);
      result.comment = [];
    });
    data[0].forEach((data) => {
      result2.forEach((result) => {
        if ( result.recipe_id === data.recipe_id ) {
          result.comment.push(data);
        }
      });
    });
    return result2;
  })
  .catch( (error) => {
    throw error;
  });
}

//get list of all recipes
// {
//     "recipe_id": 0,
//     "recipe_name": "Recipe Name",
//     "users_user_id": "Username",
//     "recipe_image_url": "fishball.jpg",
//     "recipe_rating": '47'
// }
async function readRecipeList() {
  let result2 = [];
  let promise2 = [null, null];
  promise2[0] = await knex('recipeTable').join('ratingsummaryTable', 'recipeTable.id', '=', 'ratingsummaryTable.recipe_id').select('*');
  promise2[1] = await knex('recipeTable').join('userTable', 'recipeTable.admin_id', '=', 'userTable.id').select('recipeTable.id','userTable.full_name','userTable.user_name','userTable.email');
  await Promise.all(promise2).then( (data) => {
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
  })
  .catch( (error) => {
    throw error;
  });
}

//get recipe of a particular ID
async function readRecipeFromID(id) {
  let result2 = [];
  let promise2 = [null, null, null, null];
  promise2[0] = await knex('commentTable').select('*');
  promise2[1] = await knex('recipeTable').join('howtoTable', 'recipeTable.id', '=', 'howtoTable.id').select('*').where("recipeTable.id",id);
  promise2[2] = await knex('recipeTable').join('ingredientTable', 'recipeTable.id', '=', 'ingredientTable.recipe_id').select('*').where("recipeTable.id",id);
  promise2[3] = await knex('recipeTable').join('ratingsummaryTable', 'recipeTable.id', '=', 'ratingsummaryTable.recipe_id').select('*').where("recipeTable.id",id);
  await Promise.all(promise2).then( (data) => {
    for (let i = 0; i < data[1].length; i++) {
      let temp1 = {...data[1][i], ...data[2][i], ...data[3][i]};
      result2.push(temp1);
    }
    result2.forEach((result) => {
      result.how_to = result.howto.split(/\r\n|\r|\n/g);
      delete result.howto;
      result.recipe_rating = Math.floor(result.averagescore * 20);
      result.comment = [];
    });
    data[0].forEach((data) => {
      result2.forEach((result) => {
        if ( result.recipe_id === data.recipe_id ) {
          result.comment.push(data);
        }
      });
    });
    return result2[0];
  })
  .catch( (error) => {
    throw error;
  });
}

//post full recipe
// list1
// {
//   user_id: '1',
//   recipeName: '123',
//   cookingTime: '213',
//   recipeDescription: 'safcvs',
//   recipeIngredients: 'asdasd',
//   difficulty: '5',
//   recipeHowto: '1\n2\n3\n4\n5',
//   recipePhoto: 'https://img.eservice-hk.net/upload/2020/06/14/171818_84064f1756fd535e99fec63b6abfacda.JPG'
// }
async function writeRecipe(list1) {
  let list2 = {
    name: list1.recipeName,
    cookingtime: list1.cookingTime,
    difficulty: list1.difficulty,
    admin_id: list1.user_id,
    draft: false,
    appr_status: false,
    image_url: list1.recipePhoto
  }
  knex.raw('SELECT setval(\'"recipeTable_id_seq"\', (SELECT MAX(id) from "recipeTable"));')
  .then( () => {
    knex('recipeTable').insert(list2, ['id'])
    .then( (id) => {
      knex.raw('SELECT setval(\'"ingredientTable_id_seq"\', (SELECT MAX(id) from "ingredientTable"));')
      .then( () => {
        knex('ingredientTable').insert({recipe_id: id[0].id, ingredient: list1.recipeIngredients})
        .then( () => {
          knex.raw('SELECT setval(\'"howtoTable_id_seq"\', (SELECT MAX(id) from "howtoTable"));')
          .then( () => {
            knex('howtoTable').insert({howto: list1.recipeHowto}).then(() => {return id[0].id;});
          });
        });
      });
    });
  }).catch( (error) => {
    throw error;
  });
}

//post new comment
async function postComment (user_id, recipe_id, comment) {
  await knex.raw('SELECT setval(\'"commentTable_id_seq"\', (SELECT MAX(id) from "commentTable"));')
  .then( async () => {
    await knex('commentTable').insert({ user_id: user_id, recipe_id: recipe_id, content: comment}, ['id'])
    .then((id) => {return id[0].id;});
  })
  .catch ( (error) => {
    throw error;
  });
};


//put new vote
async function updateVote(recipe_id, vote) {
  let promise3 = await knex('ratingsummaryTable').where('recipe_id', recipe_id).select("recipe_id", "totalvoters", "averagescore");
  await promise3.then( async (data) => {
    let temp1 = data[0].averagescore * data[0].totalvoters + vote;
    data[0].totalvoters ++;
    data[0].averagescore = Number(temp1 / data[0].totalvoters).toPrecision(9);
    await knex('ratingsummaryTable').where('recipe_id', recipe_id).update(data[0])
    .then(() => {return true;});
  }).catch( (error) => {
    throw error;
  });
}

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
//This file is for search function on nav bar.

const { mode } = require('crypto-js');

require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

//searching with recipe name
async function filterRPname(userinput, order_by = "New") {
    if (userinput === "") {
        // console.log("No results found")
    }
    else {
        userinput = "%" + userinput + "%"

        let filtername = await knex.select("*").from("recipeTable").
            innerJoin("userTable", "admin_id", "userTable.id")
            .innerJoin("ratingsummaryTable", "ratingsummaryTable.recipe_id", "recipeTable.id")
            .where("recipeTable.name", "ilike", userinput);

        filtername.forEach( (row) => {
            delete row.password;
            delete row.security_answer;
        });
        let result2 = {recipe:[]};
        for (let i = 0; i < filtername.length; i++) {
            let temp2 = {
              recipe_id: filtername[i].recipe_id,
              recipe_name: filtername[i].name,
              users_user_id: filtername[i].user_name,
              recipe_image_url: filtername[i].image_url,
              recipe_rating: Math.floor(filtername[i].averagescore * 20),
            };
            result2.recipe.push(temp2);
          };
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
        return result2;
    }
}
//searching with username
async function filterUSname(userinput, order_by = "New") {
    if (userinput === "") {
        // console.log("No results found")
    }
    else {
        userinput = "%" + userinput + "%"

        let filteruser = await knex.select("*").from("recipeTable").
            innerJoin("userTable", "admin_id", "userTable.id")
            .innerJoin("ratingsummaryTable", "ratingsummaryTable.recipe_id", "recipeTable.id")
            .where("userTable.user_name", "ilike", userinput);

        filteruser.forEach( (row) => {
            delete row.password;
            delete row.security_answer;
        });
        let result2 = {recipe:[]};
        for (let i = 0; i < filteruser.length; i++) {
            let temp2 = {
              recipe_id: filteruser[i].recipe_id,
              recipe_name: filteruser[i].name,
              users_user_id: filteruser[i].user_name,
              recipe_image_url: filteruser[i].image_url,
              recipe_rating: Math.floor(filteruser[i].averagescore * 20),
            };
            result2.recipe.push(temp2);
          };
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
        return result2;
    }
}
//search by food name
async function filterFDname(userinput, order_by = "New") {
    if (userinput === "") {
        // console.log("No results found")
    }
    else {
        let IDlist = []
        userinput = "%" + userinput + "%"
        let filterfood = await knex('foodTable')
            .select("foodTable.id", "food_name")
            .where("foodTable.food_name", "ilike", userinput)

        for (i = 0; i < filterfood.length; i++) {
                IDlist.push(filterfood[i].id)
                // console.log(IDlist)
            }
            // return IDlist
        let recipelist = await knex('recipeTable')
            .select("*")
            .innerJoin("food_rel_recipeTable", "recipeTable.id", "food_rel_recipeTable.recipe_id")
            .innerJoin("userTable", "admin_id", "userTable.id")
            .innerJoin("ratingsummaryTable", "ratingsummaryTable.recipe_id", "recipeTable.id")
            .where("food_id", IDlist[0]);

        recipelist.forEach( (row) => {
            delete row.password;
            delete row.security_answer;
        });
        let result2 = {recipe:[]};
        for (let i = 0; i < recipelist.length; i++) {
            let temp2 = {
              recipe_id: recipelist[i].recipe_id,
              recipe_name: recipelist[i].name,
              users_user_id: recipelist[i].user_name,
              recipe_image_url: recipelist[i].image_url,
              recipe_rating: Math.floor(recipelist[i].averagescore * 20),
            };
            result2.recipe.push(temp2);
          };
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
        return result2;
    }
}

// let promise1;
// promise1 = filterRPname('egg');
// promise1.then((stuff) => {
//     console.log(stuff);
// })
// promise1 = filterUSname('tony');
// promise1.then((stuff) => {
//     console.log(stuff);
// })
// promise1 = filterFDname('stuffed');
// promise1.then((stuff) => {
//     console.log(stuff);
// })

module.exports = {
    filterRPname,
    filterUSname,
    filterFDname,
}
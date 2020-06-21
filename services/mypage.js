//following index page logic
//display my recipe and favourites

require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});
//display my recipes
async function callREP() {
    let mypagerecipe = await knex.select("*").from("recipeTable").where("admin_id", 2)//where admin_id =2
    // console.log(mypagerecipe);
    //add forEACH needs to be done
    let REPcount = mypagerecipe.length
    let myREP = mypagerecipe[REPcount - 1]
    myREP = {
        id: myREP.id,
        name: myREP.name,
        image_url: myREP.image_url
    };
    // console.log(myREP)
    return myREP
}
// callREP()
module.exports = { callREP }

//display my favourite recipes
async function callfavREP() {
    let myfavreciperesult = await knex('fav_recipeTable').join('recipeTable', 'recipeTable.id', '=', 'fav_recipeTable.recipe_id').where('fav_recipeTable.user_id', 2)
    //console.log(myfavreciperesult)//id,difficulty can be achieve
    let favcount = myfavreciperesult.length
    let dispfavrep = myfavreciperesult[favcount - 1]
    dispfavrep = {
        recipeid: dispfavrep.recipe_id,
        userid: dispfavrep.user_id,
        image_url: dispfavrep.image_url,
    };
    // console.log(dispfavrep)
    return callfavREP
    let myfavreciperating = await knex('ratingsummaryTable').join('recipeTable', 'ratingsummaryTable.recipe_id', '=', 'recipeTable.id').where('ratingsummaryTable.recipe_id', 6)
    // console.log(myfavreciperating)

    //promise1[0] = knex('food_rel_recipeTable').join('foodTable', 'food_rel_recipeTable.food_id', '=', 'foodTable.id').select('*');

    // let count = mypagerecipe.length
    // let myREP = mypagerecipe[count - 1]
    // myREP = {
    //     id: myREP.id,
    //     name: myREP.name,
    //     image_url: myREP.image_url
    // };
    // console.log(myREP)
    // return myREP
    // return myfavreciperating
}

callfavREP()
module.exports = { callfavREP }
//this file is for index pg random food picker

require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

//read all food first
//get row number for max food num
//once randomnum is created, select relevant food with the id(randomnum)
async function callFD() {
    let allFD = await knex.select("*").from("foodTable")
    // console.log(rows)
    let mxFD = allFD.length
    let number = Math.floor((Math.random() * `${mxFD}`) + 1)
    // console.log(number)
    let randomFD = allFD[number - 1]
    randomFD = {
        id: randomFD.id,
        name: randomFD.food_name,
        image_url: randomFD.imageurl,
        numberofrecipe: '',
        recipeid: ''
    };

    let recipes = await knex.select("recipe_id").from("food_rel_recipeTable")
        .where("food_id", randomFD.id)

    randomFD.numberofrecipe = recipes.length
    randomFD.recipeid = recipes[0]
    console.log(randomFD)
    return randomFD

}

callFD()

module.exports = { callFD }
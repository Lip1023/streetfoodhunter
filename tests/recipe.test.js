const getUserNameFromID = require("../services/recipe.js").getUserNameFromID;
// const getRatingFromRecipeID = require("./service/recipe.js")
// const readAllRecipes = require("./service/recipe.js")
// const readRecipeList = require("./service/recipe.js")
// const readRecipeFromID = require("./service/recipe.js")
// const readCommentsByUser = require("./service/recipe.js")
// const writeRecipe = require("./service/recipe.js")
// const writeRecipeTable = require("./service/recipe.js")
// const writeIngredient = require("./service/recipe.js")
// const writeHowTo = require("./service/recipe.js")
// const initializeVote = require("./service/recipe.js")
// const postComment = require("./service/recipe.js")
// const updateVote = require("./service/recipe.js")
// const deleteComment = require("./service/recipe.js")
// const getMyPage = require("./service/recipe.js")
// const addFavourite = require("./service/recipe.js")
// const deleteFavourite = require("./service/recipe.js")


const pg = require('pg');                 // not using knex for SQL query
const escape = require('pg-escape');      // use another package to avoid SQL injection
const Knex = require('knex');
require('dotenv').config();             // https://github.com/segmentio/pg-escape

const config = {
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
}

//test start//
describe('trying to return the correct user name form the user id', () => {

    //let things//
    // let user = {
    //     "user.id" = 2 
    // } 


    //migrate and seed reset and setup
    // beforeEach(async () => {
    //     await knex.migrate.rollback([{ directory: '../migrations' }])
    //     await knex.migrate.latest([{ directory: '../migrations' }])
    //     await knex.seed.run([{ directory: '../seeds' }])
    // })

    // afterAll(async () => {
    //     await knex.migrate.rollback([{ directory: '../migrations' }])
    //     await knex.migrate.latest([{ directory: '../migrations' }])
    //     await knex.seed.run([{ directory: '../seeds' }])
    // })


    test('getUserNameFromID', () => {
        expect(this.filerUSname('egg')).
        expect(getUserNameFromID(2)).toBe('thisismary');
    });

    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });
    xtest('getUserNameFromID', () => {
        expect(getUserNameFromID(2)).toBe('thisismary');
    });




})
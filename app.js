const pg= require('pg')
const express = require('express');
const app = express();
const hb = require('express-handlebars');

// const knex = require('knex')({
//     client: 'postgresql',
//     connection: {
//         database: "streetfood",
//         user: "admin",
//         password: "supersecret"
//     }
// });
// var client = new pg.Client('postgres://xccelerate:password@localhost:5432/bookings');

// client.connect();

app.engine('handlebars', hb({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars'); 

    app.use(express.static("public"));

    app.get('/', (req, res)=>{
        res.render('index' )
    });

let list1 = {
    recipe: [
    {
        "recipe_id": 1,
        "recipe_name": "Spicy Fishball",
        "users_user_id": "pullip123",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x2764;&#x2764;&#x2764;&#x2764;&#x2764;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '&#x25c7;&#x25c7;&#x25c7;&#x25c7;&#x25c7;'
    }]
}
// RECIPE
//recipe index page
    app.get('/recipe', (req, res)=>{
        res.render('recipeindex',list1 )
    });
//adding new recipe
    app.post('/recipe',(req, res)=>{
        res.render('newrecipe')
    });

let result = {
    name:"Spicy Fishball",
    difficulty: 1,
    cookingtime: 20,
    ingredient: 'fish: 100g, flour: 200g, water: 1/2 cup',
    how_to: ['do somthing', 'do something more', 'do some thing again', 'eat it']
};

function numberToStars(num) {
    let str1 = "";
    for(let i = 0; i < num; i++) {str1 += "★";};
    return str1.padEnd(5, '☆');
}

result.difficulty = numberToStars(result.difficulty);

//hardcoding the id for now
    app.get('/recipe:1', (req, res)=>{
        res.render('recipe', result)
    });
//

    app.get('/search', (req, res)=>{
        res.render('search');
    });




    
// Mypage
    app.get('/mypage', (req, res)=>{
        res.render('mypage' )
    });

    app.get('/signup', (req, res)=>{
        res.render('signup' )
    });

    app.get('/forgotpassword',(req,res)=>{
        res.render('forgotpassword')
    })
 


    app.listen(8080, ()=>{

        console.log(`App is listening to port 8080`);
    });
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

    app.get('/recipes', (req, res)=>{
        res.render('recipeindex' )
    });
//hardcoding the id for now
    app.get('/recipes:1', (req, res)=>{
        res.render('recipe' )
    });

    app.get('/search', (req, res)=>{
        res.render('search');
    });


    app.get('/mypage', (req, res)=>{
        res.render('mypage' )
    });
 
    app.listen(8080, ()=>{

        console.log(`App is listening to port 8080`);
    });
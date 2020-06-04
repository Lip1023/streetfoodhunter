var pg = require('pg');
const express = require('express');
const app = express();
const hb = require('express-handlebars');


const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "streetfood",
        user: "admin",
        password: "supersecret"
    }
});

var client = new pg.Client('postgres://xccelerate:password@localhost:5432/bookings');

client.connect();

//connecting handlebars
app.engine('handlebars', hb({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars'); 

    app.use(express.static("public"));

    app.get('/', (req, res)=>{
        res.render('index' )
    });

    app.get('/recipes', (req, res)=>{
        res.render('recipe' )
    });

    app.get('/search', (req, res)=>{
        res.render('search');
    });


    app.get('/mypage', (req, res)=>{
        res.render('mypage' )
    });


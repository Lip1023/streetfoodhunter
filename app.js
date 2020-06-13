const pg= require('pg')
const express = require('express');
const app = express();
const hb = require('express-handlebars');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const session = require('express-session');

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

const setupPassport = require('./passport/passport')
const router = require('./router')(express);
const reciperouter = require('./reciperouter')(express);

app.engine('handlebars', hb({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars'); 

    app.use(express.static("public"));

    let result = {
        id: 1,
        name:"Spicy Fishball",
        difficulty: 20,
        cookingtime: 20,
        ingredient: 'fish: 100g, flour: 200g, water: 1/2 cup, garlic 2coves, 1 medium sized onion, 1tbs salt, 2 eggs, 5 red chillis, Frying-Oil',
        how_to: ['Take out skin of the fish', 'Boil the fish(including bones), garlic and onion for 10minutes', 'Mix flour with 1/2 of warm luke water(50°C) and leave it until cooking fish is done', 'Take out bones from the fish, mash the meat with garlic and onion', 'Mix the mashed fish with flour, add 1tbs of salt', 'Chop spicy chilli into small pieces', 'Make ball shapes of fish-flour mix and roll them on chilli pieces', 'Soak the fishball in eggwater', 'Fry them for 5 minutes in 180°C oil' ],
        imgae_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg"
    };

    app.get('/', (req, res)=>{
        res.render('index',result )
    });

    app.get('/search', (req, res)=>{
        res.render('search');
    });




    
// Mypage
    app.get('/mypage', (req, res)=>{
        res.render('mypage')
    });

    app.get('/signup', (req, res)=>{
        res.render('signup' )
    });

    app.get('/forgotpassword',(req,res)=>{
        res.render('forgotpassword')
    })
 
    // app.listen(8080, ()=>{

    //     console.log(`App is listening to port 8080`);
    // });

    app.use(session({
        secret: 'superDifficultAndSecret',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }
    }))
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false|true}));
    app.use(express.static('public'));
    
    const options = {
        cert: fs.readFileSync('./localhost.crt'),
        key: fs.readFileSync('./localhost.key')
    };
    
    setupPassport(app);
    app.use('/', router);
    app.use('/', reciperouter);
    
    https.createServer(options, app).listen(8080, function(){
        console.log('app is listening to port 8080')
    });





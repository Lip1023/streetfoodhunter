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

    app.get('/', (req, res)=>{
        res.render('index' )
    });

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
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user:     process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

module.exports = (app) => {

    passport.use('local-login', new LocalStrategy(
        async(email, password, done)=>{
            try{
                let users = await knex('userTable').where({email:email});
                if(users.length ==0){
                    return done(null, false, {message: 'Incorrect Credentials.'})
                } 
                let user = users[0];
                let result = await bcrypt.checkPassword(password, user.password)
                if(result){
                    return done(null, user);
                } else{
                    return done(null, false, {message: 'Incorrect Credentials.'})
                }

            } catch(err){
                return done(err);
            }
        }
    ));

passport.use('local-signup', new LocalStrategy({
        passReqToCallback: true
      },
    async (req, email, password, done) => {
        try {
            console.log(req.body.sa);
            let index = email.indexOf("@");
            let user_name = email.slice(0, index);
            await knex.raw('SELECT setval(\'"userTable_id_seq"\', (SELECT MAX(id) from "userTable"));');
            let users = await knex('userTable').where({email:email});
            if(users.length > 0){
                return done (null, false, {message: "Email Already Taken"});
            }
            let hash = await bcrypt.hashPassword(password)
            let hash2 = await bcrypt.hashPassword(req.body.sa)
            const newUser = {
                full_name: user_name,
                user_name: user_name,
                email: email,
                password: hash,
                security_answer: hash2
            };
            let userId = await knex('userTable').insert(newUser). returning('id');
            newUser.id = userId[0];
            done(null, newUser);
        }catch(err){
            done(err)
        }
    }
));


//
passport.use('local-change', new LocalStrategy({
    passReqToCallback: true
  },
async (req, email, password, done) => {
    console.log(req.body.sa);
    try {
        let users = await knex('userTable').where({email:email});
        if(users.length ==0){
            return done(null, false, {message: 'Incorrect Credentials.'})
        } 
        let user = users[0];
        //query to check question answer instead**** 
        let result = await bcrypt.checkPassword(req.body.sa, user.security_answer);
        if(result){
            let hash = await bcrypt.hashPassword(password);
            user.password = hash;
            let id = user.id;
            delete user.id;
            await knex('userTable').where("id",id).update(user);
            user.id = id;
            return done(null, user);
        } else{
            return done(null, false, {message: 'Incorrect Credentials.'})
        }
    }catch(err){
        done(err)
    }
}
))


    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser(async(id,done)=>{
        let users = await knex('userTable').where({id:id});
        if(users.length==0){
            return done(new Error(`Wrong User id ${id}`))
        } 
        let user = users[0];
        return done(null, user)
    })

}
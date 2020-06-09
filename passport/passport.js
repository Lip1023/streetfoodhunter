const passport = require('passport');

module.exports = (app) => {

    app.use(passport.initialize());
    app.use(passport.session());


    passport.serializeUser((user, done)=>{
        done(null, user);
    });

    passport.deserializeUser(async(user,done)=>{
         done(null, user)
    })

    require('./strategies/facebook-strategy')(passport);
    require('./strategies/twitter-strategy')(passport);
    require('./strategies/google-strategy')(passport);
    require('./strategies/local-strategy')(app);

}
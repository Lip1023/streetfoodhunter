const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user:     process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

module.exports = (passport) => {
    passport.use('google', new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `/auth/google/callback`,
        includeEmail: true
    }, async (accessToken, refreshToken, profile, done) => {
        // console.log(profile);

        let userResult = await knex('users').where({ googleID: profile.id });
        if (userResult == 0) {
            let user = {
                googleID: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                googleAccessToken: accessToken
            }
            let query = await knex('users').insert(user).returning('id');
            user.id = query[0];
            done(null, user);
        } else {
            done(null, userResult[0])
        }
    }
    ));
}
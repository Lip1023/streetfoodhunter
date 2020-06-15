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
        await knex.raw('SELECT setval(\'"userTable_id_seq"\', (SELECT MAX(id) from "userTable"));');
        let userResult = await knex('userTable').where({ googleID: profile.id });
        if (userResult == 0) {
            let user = {
                googleID: profile.id,
                full_name: profile.displayName,
                user_name: profile.displayName,
                email: profile.emails[0].value,
                googleAccessToken: accessToken
            }
            let query = await knex('userTable').insert(user).returning('id');
            user.id = query[0];
            done(null, user);
        } else {
            done(null, userResult[0])
        }
    }
    ));
}
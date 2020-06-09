const TwitterStrategy = require('passport-twitter').Strategy;

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
    passport.use('twitter', new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: `/auth/twitter/callback`,
        includeEmail: true
    }, async (accessToken, refreshToken, profile, done) => {
        // console.log(profile);

        let userResult = await knex('users').where({ twitterID: profile.id });
        if (userResult == 0) {
            let user = {
                twitterID: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                twitterAccessToken: accessToken
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
var pg = require('pg');

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

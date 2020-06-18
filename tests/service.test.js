require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

describe('testing the query for the service file', () => {
    beforeEach(async () => {
        await knex.migrate.rollback([{ directory: '../migrations' }])
        await knex.migrate.latest([{ directory: '../migrations' }])
        await knex.seed.run([{ directory: '../seeds' }])

        blogService = new BlogService()
    })

    afterAll(async () => {
        await knex.migrate.rollback([{ directory: '../migrations' }])
        await knex.migrate.latest([{ directory: '../migrations' }])
        await knex.seed.run([{ directory: '../seeds' }])
    })
    xtest('test search function for username', () => {
        expect.assertions(4);

        let userinput = {
            title: "egg"
        }

        return filterRPname(userinput)
            .then((results) => {
                expect(results.length).toBe(1)
                expect(results[0].title).toBe('Some cool post')
                expect(results[0].body).toBe('Image theres a great article written here')
                expect(results[0].user_id).toBe(1)
            })
    })

    xtest('test search function for filterUSname', () => {
        expect.assertions(4);

        let userinput = {
            title: "tony"
        }

        return filterRPname(userinput)
            .then((results) => {
                expect(results.length).toBe(1)
                expect(results[0].title).toBe('Some cool post')
                expect(results[0].body).toBe('Image theres a great article written here')
                expect(results[0].user_id).toBe(1)
            })
    })


    xtest('test search function for recipe name', () => {
        expect.assertions(4);

        let userinput = {
            title: "stuffed"
        }

        return filterRPname(userinput)
            .then((results) => {
                expect(results.length).toBe(1)
                expect(results[0].title).toBe('Some cool post')
                expect(results[0].body).toBe('Image theres a great article written here')
                expect(results[0].user_id).toBe(1)
            })
    })
})

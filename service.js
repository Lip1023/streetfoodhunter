//This file is for search function on nav bar.


require('dotenv').config();
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    }
});

//searching with recipe name
async function filterRPname(userinput) {
    if (userinput === "") {
        console.log("No results found")
    }
    else {
        userinput = "%" + userinput + "%"

        let filtername = knex.select("*").from("recipeTable")
            .where("name", "ilike", userinput)

        filtername.then((rows) => {
            console.log(rows)
            return rows
        })
            .catch((error) => {
                console.log(error);
            })
    }
}
//searching with username
async function filterUSname(userinput) {
    if (userinput === "") {
        console.log("No results found")
    }
    else {
        userinput = "%" + userinput + "%"

        let filteruser = knex.select("*").from("recipeTable").
            innerJoin("userTable", "admin_id", "userTable.id")
            .where("userTable.user_name", "ilike", userinput)

        filteruser.then((rows) => {
            console.log(rows)
            return rows
        })
            .catch((error) => {
                console.log(error);
            })
    }
}
//search by food name
async function filterFDname(userinput) {
    if (userinput === "") {
        console.log("No results found")
    }
    else {

        userinput = "%" + userinput + "%"

        let filterfood = knex('foodTable')
            .select()
            .innerJoin("food_rel_recipeTable", "foodTable.id", "food_rel_recipeTable.id")
            .where("foodTable.food_name", "ilike", userinput)

        filterfood.then((rows) => {
            console.log(rows)
            return rows
        })
            .catch((error) => {
                console.log(error);
            })
    }
}

// filterRPname('egg')
// filterUSname('tony')
filterFDname('egg')
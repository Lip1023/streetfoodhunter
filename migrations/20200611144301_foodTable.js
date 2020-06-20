
exports.up = function(knex,Promise) {
    return knex.schema.createTable('foodTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('food_name');
        table.string('local_name');
        table.string('cuisine_name');
        table.string('imageurl', 10485760);
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('foodTable');
};

//not in use
// exports.up = function(knex,Promise) {
//     return knex.schema.createTable('foodprofile', (table) => {
//         table.increments();
//         // this is equal to primary key -SERIAL
//         table.string('name');
//         table.string('city');
//         table.json('preferencetags');//foreign keys
//         table.timestamps(false, true); 
//     });
// };

// exports.down = function(knex,Promise) {
//     return knex.schema.dropTable('foodprofile');
// };

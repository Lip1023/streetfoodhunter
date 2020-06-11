
exports.up = function(knex,Promise) {
    return knex.schema.createTable('foodTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('food_name');
        table.string('local_name');
        table.string('cusine_name');
        table.string('imageurl');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('foodTable');
};

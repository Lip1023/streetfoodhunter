
exports.up = function(knex,Promise) {
    return knex.schema.createTable('foodprofile', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('name');
        table.string('city');
        table.json('preferencetags');//foreign keys
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('foodprofile');
};

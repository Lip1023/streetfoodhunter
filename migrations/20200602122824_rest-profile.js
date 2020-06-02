
exports.up = function(knex,Promise) {
    return knex.schema.createTable('restaurantsprofile', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('name');
        table.string('3rdpartypage');
        table.integer('review');
        table.string('address');
        table.string('city');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('restaurantsprofile');
  
};

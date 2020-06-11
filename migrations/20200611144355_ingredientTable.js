
exports.up = function(knex,Promise) {
    return knex.schema.createTable('ingredientTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('ingredient');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('ingredientTable')
};
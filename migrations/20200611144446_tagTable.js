
exports.up = function(knex,Promise) {
    return knex.schema.createTable('tagTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('tag');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('tagTable')
};
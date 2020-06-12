
exports.up = function(knex,Promise) {
    return knex.schema.createTable('howtoTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('howto', 10485760);
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('howtoTable')
};
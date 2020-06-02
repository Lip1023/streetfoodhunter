
exports.up = function(knex,Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('name');
        table.string('email');
        table.string('historyreview');
        table.integer("historyrating")
        table.string('preference');//???
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('users')
};
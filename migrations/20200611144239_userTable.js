
exports.up = function(knex,Promise) {
    return knex.schema.createTable('userTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('full_name');
        table.string('user_name');
        table.string('password');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('userTable')
};
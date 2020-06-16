
exports.up = function(knex,Promise) {
    return knex.schema.createTable('userTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('full_name');
        table.string('user_name');
        table.string('email')
        table.string('password');
        table.string('security_answer', 10485760);
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('userTable')
};

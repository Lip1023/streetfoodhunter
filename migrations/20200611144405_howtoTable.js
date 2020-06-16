
exports.up = function(knex,Promise) {
    return knex.schema.createTable('howtoTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.integer('recipe_id').unsigned().unique();
<<<<<<< HEAD
        table.string('howto', 10485760);
=======
        table.foreign('recipe_id').references('recipeTable.id');
        table.string('howto');
>>>>>>> 3c5d741a0eac360f959d1791a1c319a6a56543c4
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('howtoTable')
};
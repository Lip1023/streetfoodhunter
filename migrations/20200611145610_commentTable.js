
exports.up = function(knex,Promise) {
    return knex.schema.createTable('commentTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.integer('user_id').unsigned().unique();
        table.foreign('user_id').references('userTable.id');
        table.integer('recipe_id').unsigned().unique();
        table.foreign('recipe_id').references('recipeTable.id');
        table.string('content');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('commentTable')
};
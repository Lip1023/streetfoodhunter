
exports.up = function(knex,Promise) {
    return knex.schema.createTable('ingredientTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.integer('recipe_id').unsigned().unique();
        //table.foreign('recipe_id').references('recipeTable.id');
        table.string('ingredient', 10485760);
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('ingredientTable')
};
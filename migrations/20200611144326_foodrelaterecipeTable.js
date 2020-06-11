
exports.up = function(knex,Promise) {
    return knex.schema.createTable('food_rel_recipeTable', (table) => {
        table.increments();
        table.integer('food_id').unsigned().unique();
        table.foreign('food_id').references('foodTable.id');
        table.integer('recipe_id').unsigned().unique();
        table.foreign('recipe_id').references('recipeTable.id');
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('food_rel_recipeTable')
};

exports.up = function(knex,Promise) {
    return knex.schema.createTable('recipetagTable', (table) => {
        table.increments();
        table.integer('tag_id').unsigned().unique();
        table.foreign('tag_id').references('tag.id');
        table.integer('recipe_id').unsigned().unique();
        table.foreign('recipe_id').references('recipeTable.id');
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('food_rel_recipeTable')
};
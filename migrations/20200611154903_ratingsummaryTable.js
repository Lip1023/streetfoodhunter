
exports.up = function(knex,Promise) {
    return knex.schema.createTable('ratingsummaryTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.integer('recipe_id').unsigned().unique();
        table.foreign('recipe_id').references('recipeTable.id');
        table.integer('totalvoters')
        table.integer('averagescore')
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('ratingsummaryTable')
};
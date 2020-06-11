
exports.up = function(knex,Promise) {
    return knex.schema.createTable('recipeTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.integer('cookingtime');
        table.integer('difficulty');
        table.interger('rating');
        table.string('ingredient');
        table.integer('ingredient_id').unsigned().unique();
        table.foreign('ingredient_id').references('ingredient.id');
        table.integer('howto_id').unsigned().unique();
        table.foreign('howto_id').references('howto.id');
        table.integer('admin_id').unsigned().unique();
        table.foreign('admin_id').references('userTable.id');
        table.boolean('draft');
        table.boolean('appr_status');
        table.string('image_url');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('recipeTable')
};
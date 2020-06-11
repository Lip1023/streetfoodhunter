
exports.up = function(knex,Promise) {
    return knex.schema.createTable('receipe', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('name');
        table.string('ingredients');
        table.string('cookingtime');
        table.integer('cookingdifficulties');
        table.string('instruction');
        table.integer('rating').unsigned().unique();
        table.foreign('rating').references('ratingsummayTable.averagescore');
        table.integer('food_id').unsigned().unique();
        table.foreign('food_id').references('foodprofile.id');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
    return knex.schema.dropTable('receipe')
  
};

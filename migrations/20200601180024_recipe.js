
exports.up = function(knex, promise) {
    knex.schema.createTable('recipe', table => {
        //id
        table.increments();
        //name
        table.string('name');
        //cooking time
        table.integer('cooking_time');
        //ingredients
        table.string('ingredients');
        //steps
        table.string('how_to')
        //difficulty
        table.integer('difficulty')
        //food id
        table.integer('food_id').unsigned()
        table.foreign('food_id').references('food.id')
}
    )};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe')
};


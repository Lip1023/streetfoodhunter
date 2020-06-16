
exports.up = function(knex) {
    return knex.schema.createTable('ratingsummaryTable', (table) => {
        table.increments();
        table.integer('recipe_id');
        table.integer('totalvoters');
        table.float('averagescore');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ratingsummaryTable');
};

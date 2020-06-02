
exports.up = function(knex) {
    knex.schema.createTable('food', table => {
        //id
        table.increments();
        //name
        table.string('name');
        //location
        table.string('location');
        //hashtag
        table.string('tag');
       
}
    )};

exports.down = function(knex) {
    exports.down = function(knex, Promise) {
        return knex.schema.dropTable('food')
    };
};





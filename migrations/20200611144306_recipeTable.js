
exports.up = function(knex,Promise) {
    return knex.schema.createTable('recipeTable', (table) => {
        table.increments();
        // this is equal to primary key -SERIAL
        table.string('name', 10485760);
        table.string('cookingtime');
        table.float('difficulty', 2, 1);
        table.integer('admin_id').unsigned();//.unique();
        //table.foreign('admin_id').references('userTable.id');
        table.boolean('draft');
        table.boolean('appr_status');
        table.string('image_url');
        table.timestamps(false, true); 
    });
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('recipeTable')
};

//not in use
// exports.up = function(knex,Promise) {
//     return knex.schema.createTable('receipe', (table) => {
//         table.increments();
//         // this is equal to primary key -SERIAL
//         table.string('name');
//         table.string('ingredients');
//         table.string('cookingtime');
//         table.integer('cookingdifficulties');
//         table.string('instruction');
        
//         table.integer('food_id').unsigned().unique();
//         table.foreign('food_id').references('foodprofile.id');
//         table.timestamps(false, true); 
//     });
// };

// exports.down = function(knex,Promise) {
//     return knex.schema.dropTable('receipe')
  
// };

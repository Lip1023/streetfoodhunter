
exports.up = function(knex) {
    return knex.schema.table('userTable', function(table){
        table.string('facebookID');
        table.string('twitterID');
        table.string('googleID');
        table.string('facebookAccessToken');
        table.string('twitterAccessToken');
        table.string('googleAccessToken');
    })
  
};

exports.down = function(knex) {
    return knex.schema.table('userTable', (table)=>{
        table.dropColumn('facebookID');
        table.dropColumn('twitterID');
        table.dropColumn('googleID');
        table.dropColumn('facebookAccessToken');
        table.dropColumn('twitterAccessToken');
        table.dropColumn('googleAccessToken');
    })
  
};

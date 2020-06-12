
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTable').insert([
        {id: 1, full_name: 'John',user_name: 'super_john', email:'superjohn@abc.com', password:'super'},
        {id: 2, full_name: 'Mary',user_name: 'thisismary', email:'thisismary@abc.com', password:'mary2'},
        {id: 3, full_name: 'Smith',user_name: 'samsmith', email:'samsmith@abc.com', password:'smith3'},
        {id: 4, full_name: 'Stark',user_name: 'Tony', email:'tonystrak@abc.com', password:'ironman'},
        {id: 5, full_name: 'Bane',user_name: 'villainbane', email:'villainebane@abc.com', password:'ihatebatman'},
      ]);
    });
};

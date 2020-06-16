
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('userTable').insert([
        {full_name: 'John',user_name: 'super_john', email:'superjohn@abc.com', password:'super',security_answer:'123'},
        {full_name: 'Mary',user_name: 'thisismary', email:'thisismary@abc.com', password:'mary2',security_answer:'123'},
        {full_name: 'Smith',user_name: 'samsmith', email:'samsmith@abc.com', password:'smith3',security_answer:'123'},
        {full_name: 'Stark',user_name: 'Tony', email:'tonystrak@abc.com', password:'ironman',security_answer:'123'},
        {full_name: 'Bane',user_name: 'villainbane', email:'villainebane@abc.com', password:'ihatebatman',security_answer:'123'},
      ]);
   
};

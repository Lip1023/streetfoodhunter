
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('userTable').insert([
        {id: 1, full_name: 'John',user_name: 'super_john', email:'superjohn@abc.com', password:'$2b$10$3cD3ALX2vbvgdYqlD8etuOpMZT4yrM1Zu1oM5QIVaEFL7y25RyNhG', security_answer:'$2b$10$bZfVcwgvChclwISCrU6iIOUzIXudhPsgNVlfgwo7o4Ze2Uk4NqUqW'},
        {id: 2, full_name: 'Mary',user_name: 'thisismary', email:'thisismary@abc.com', password:'$2b$10$3cD3ALX2vbvgdYqlD8etuOpMZT4yrM1Zu1oM5QIVaEFL7y25RyNhG', security_answer:'$2b$10$bZfVcwgvChclwISCrU6iIOUzIXudhPsgNVlfgwo7o4Ze2Uk4NqUqW'},
        {id: 3, full_name: 'Smith',user_name: 'samsmith', email:'samsmith@abc.com', password:'$2b$10$3cD3ALX2vbvgdYqlD8etuOpMZT4yrM1Zu1oM5QIVaEFL7y25RyNhG', security_answer:'$2b$10$bZfVcwgvChclwISCrU6iIOUzIXudhPsgNVlfgwo7o4Ze2Uk4NqUqW'},
        {id: 4, full_name: 'Stark',user_name: 'Tony', email:'tonystrak@abc.com', password:'$2b$10$3cD3ALX2vbvgdYqlD8etuOpMZT4yrM1Zu1oM5QIVaEFL7y25RyNhG', security_answer:'$2b$10$bZfVcwgvChclwISCrU6iIOUzIXudhPsgNVlfgwo7o4Ze2Uk4NqUqW'},
        {id: 5, full_name: 'Bane',user_name: 'villainbane', email:'villainebane@abc.com', password:'$2b$10$3cD3ALX2vbvgdYqlD8etuOpMZT4yrM1Zu1oM5QIVaEFL7y25RyNhG', security_answer:'$2b$10$bZfVcwgvChclwISCrU6iIOUzIXudhPsgNVlfgwo7o4Ze2Uk4NqUqW'},
      ]);
    });
};


exports.seed = function(knex) {

      // Inserts seed entries
      return knex('userTable').insert([
        {full_name: 'John',user_name: 'super_john', email:'superjohn@abc.com', password:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2',security_answer:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2'},
        {full_name: 'Mary',user_name: 'thisismary', email:'thisismary@abc.com', password:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2',security_answer:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2'},
        {full_name: 'Smith',user_name: 'samsmith', email:'samsmith@abc.com', password:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2',security_answer:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2'},
        {full_name: 'Stark',user_name: 'Tony', email:'tonystrak@abc.com', password:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2',security_answer:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2'},
        {full_name: 'Bane',user_name: 'villainbane', email:'villainebane@abc.com', password:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2',security_answer:'$2b$10$qDtw1dI0/GEqpHG.AaFQ3OaKmSycB2VgnYa4wBg3agQ73GexvGBh2'},
      ]);
   
};

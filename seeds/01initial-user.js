// const bcrypt = require('bcryptjs');
// const password = 'tehpassword$$$'
// const hash = bcrypt.hashSync(password, 10);

exports.seed = function(knex,Promise) {

      // Inserts seed entries
      return knex('userTable').insert([
        {full_name: 'John',user_name: 'super_john', email:'superjohn@abc.com', password:'$2b$10$pBcAr.C7x4UGFieiXjiHgebTHc1Lsj58RRsZ3M8cfLFxoND9ndu0q',security_answer:'123'},
        {full_name: 'Mary',user_name: 'thisismary', email:'thisismary@abc.com', password:'$2b$10$AJGOaTDvBHrhleOgEjtwx.85KcIeEZ6UUCrtLHeLwUmfGA81NFbO.',security_answer:'123'},
        {full_name: 'Smith',user_name: 'samsmith', email:'samsmith@abc.com', password:'$2b$10$Ejh1nA6w3fXzSw0kn2KRlu5UUA7Vid0aqDgiyEtePAOK/ar7durg6',security_answer:'123'},
        {full_name: 'Stark',user_name: 'Tony', email:'tonystrak@abc.com', password:'$2b$10$zN2M56MqBDX82Lw/4JUJl.BlbjtGNqvV3x8h7xWcqq2qjCRJZSb.2',security_answer:'123'},
        {full_name: 'Bane',user_name: 'villainbane', email:'villainebane@abc.com', password:'$2b$10$VEtbM4bC2DdKpR6axNMsV.Ctr.1xypi6HP4.zQQKZ6YwlVG.JPIti',security_answer:'123'},
      ]);
   
};

exports.seed= function(knex, Promise) {
    // Deletes ALL existing entries
    returnknex('users').del().then(function() {
        // Inserts seed entriesr
        return knex('users').insert([
            {name:'Ben', email:'ben@b.com'},
            {name:'Matt', email:'matt@m.com'},
            {name:'John', email:'john@j.com'},
            {name:'Alice', email:'alice@a.com'},
            {name:'Emma', email:'emma@e.com'},
            {name:'Jenna', email:'jenna@j.com'},
        ]); 
    });
};

exports.seed = function(knex,Promise) {

      // Inserts seed entries
      return knex('tagTable').insert([
        {
          "tag" : "Sweet"
        },
        {
          "tag" : "Sour "
        },
        {
          "tag" : "Vegetarian"
        },
        {
          "tag" : "Spicy"
        },
        {
          "tag" : "BBQ"
        },
        {
          "tag" : "Dessert"
        },
        {
          "tag" : "Fried"
        },
        {
          "tag" : "Steamed"
        },
        {
          "tag" : "Appetizer"
        },
        {
          "tag" : "Baked"
        },
        {
          "tag" : "Soup Based"
        },
        {
          "tag" : "Cantonese"
        },
        {
          "tag" : "Chinese"
        },
        {
          "tag" : "Japanese"
        },
        {
          "tag" : "Korean"
        },
        {
          "tag" : "Thai"
        }
      ]);

};




exports.seed = function(knex,Promise) {

      // Inserts seed entries
      return knex('tagTable').insert([
        {tag: 'Sweet'},
        {tag: 'Sour'},
        {tag: 'Bitter'},
        {tag: 'Vegetarian'},
        {tag: 'Meat'},
        {tag: 'Beef'},
        {tag: 'Pork'},
        {tag: 'Fish'},
        {tag: 'Seafood'},
        {tag: 'Spicy'},
        {tag: 'Non-Spicy'},
        {tag: 'Egg'},
        {tag: 'BBQ'},
        {tag: 'Dessert'},
        {tag: 'Fried'},
        {tag: 'Steamed'},
        {tag: 'Appetizer'},
        {tag: 'Baked'}
      ]);

};

//{
//   "Taste": ["bitter","salty","sour","sweet","chilli","umami"],
//   "meat choice":["vegetarian, pork, chicken, beef, seafood"]
// }

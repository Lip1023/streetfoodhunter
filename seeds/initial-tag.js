
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tagTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('tagTable').insert([
        {id: 1, tag: 'Sweet'},
        {id: 2, tag: 'Sour'},
        {id: 3, tag: 'Bitter'},
        {id: 4, tag: 'Vegetarian'},
        {id: 5, tag: 'Meat'},
        {id: 6, tag: 'Beef'},
        {id: 7, tag: 'Pork'},
        {id: 8, tag: 'Fish'},
        {id: 9, tag: 'Seafood'},
        {id: 10, tag: 'Spicy'},
        {id: 11, tag: 'Non-Spicy'},
        {id: 12, tag: 'Egg'},
        {id: 13, tag: 'BBQ'},
        {id: 14, tag: 'Dessert'},
        {id: 15, tag: 'Fired'},
        {id: 16, tag: 'Steamed'},
        {id: 17, tag: 'Appetizer'},
        {id: 18, tag: 'Baked'}
      ]);
    });
};

//{
//   "Taste": ["bitter","salty","sour","sweet","chilli","umami"],
//   "meat choice":["vegetarian, pork, chicken, beef, seafood"]
// }

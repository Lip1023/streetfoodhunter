
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientTable').insert([
        {id: 1, recipe_id:1,ingredient: '1 cup all-purpose flour,1 tsp  baking powder,1/2 tbsp tapioca starch,1  tbsp custard powder,2 large eggs,2/3  cup  granulated white sugar,2 tbsp evaporated milk,150 ml  water,1 tbsp vegetable oil,1 tsp vanilla extract'},
        {id: 2, recipe_id:2,ingredient: 'Tofu pudding:,6 cups fresh soy milk,1 Tbsp corn starch,1/4 cup water,1/2 tsp glucono delta lactone (GDL),Ginger Syrup (optional):,3 inch knob fresh ginger,1 Tbsp white sugar,9 oz brown slab sugar or brown sugar,1/2 cup water'},
        {id: 3, recipe_id:3,ingredient: '1 large eggplant or 2 small,1 bitter melon,7 long chilies,14 oz dace fish paste, 400 g,1/2 cup chicken stock (or water)'},
        {id: 4, recipe_id:4,ingredient: '70 gram pork/ chicken,40 gram black fungus,few shiitake mushrooms,50 gram Chinese vermicelli noodles,1 egg,800 ml chicken broth,2 tablespoons dark soy sauce,1 tablespoon light soy sauce,2 tablespoons water chestnut flour'},
        {id: 5, recipe_id:5,ingredient: '5 tablespoons fresh lime juice,3 tablespoons (packed) palm sugar or golden brown sugar,2 tablespoons plus 2 teaspoons fish sauce,2 tablespoons dried shrimp, chopped,4 garlic cloves, minced,3 Chinese long beans, halved crosswise or 15 green beans,1 1 1/2- to 1 3/4-pound green papaya, peeled, halved, seeded,10 large cherry tomatoes, halved,1 cup chopped fresh cilantro,2 green onions, very thinly sliced,1 fresh red Thai chile with seeds, thinly sliced,2 tablespoons coarsely chopped salted peanuts'},
        {id: 6, recipe_id:6,ingredient: 'PASTRY,280 g Plain Flour ,2 tbsp Icing Sugar ,2 Egg Yolk ,1 Egg White ,150 g Salted Butter,FILLING ,150 g Castor Sugar or fine sugar ,150 g Hot Water ,4 Whole Eggs,250 ml Fresh Milk ,1/2 tsp Vanilla Extract a pinch of fine salt'},
        {id: 7, recipe_id:7,ingredient: '1/2 cups glutinous (sweet) rice,1/3 cups well-stirred canned unsweetened coconut milk,1/3 cup plus 3 tablespoons sugar,1/4 teaspoon salt,1 tablespoon sesame seeds, toasted lightly,1 large mango, peeled, pitted, and cut into thin slices (at least 24)'}
      ]);
    });
};

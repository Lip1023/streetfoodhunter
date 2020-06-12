
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeTable').insert([
        {id: 1, name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 3, admin_id: 3, draft: false , appr_status: true},
        {id: 2, name: 'Tofu Pudding', cookingtime: '45mins', difficulty: 4.5, admin_id: 4, draft: false , appr_status: true},
        {id: 3, name: 'Three Stuffed Treasures', cookingtime: '20mins', difficulty: 3.8, admin_id: 2, draft: false , appr_status: true},
        {id: 4, name: 'Fake "Shark Fin" Soup', cookingtime: '20mins', difficulty: 3.2, admin_id: 2, draft: true , appr_status: false},
        {id: 5, name: 'Green Papaya Salad ', cookingtime: '20mins', difficulty: 2, admin_id: 4, draft: false , appr_status: false},
        {id: 6, name: 'Eggtart', cookingtime: '45mins', difficulty: 3.3, admin_id: 6, draft: false , appr_status: true},
        {id: 7, name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 4.0, admin_id: 2, draft: false , appr_status: false}
      ]);
    });
};

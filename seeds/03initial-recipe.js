
exports.seed = function(knex) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('recipeTable').insert([
        {name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 3, admin_id: 3, draft: false , appr_status: true,image_url:'./xxx.jpg'},
        {name: 'Tofu Pudding', cookingtime: '45mins', difficulty: 4.5, admin_id: 4, draft: false , appr_status: true,image_url:'./xxx.jpg'},
        {name: 'Three Stuffed Treasures', cookingtime: '20mins', difficulty: 3.8, admin_id: 2, draft: false , appr_status: true,image_url:'./xxx.jpg'},
        {name: 'Fake "Shark Fin" Soup', cookingtime: '20mins', difficulty: 3.2, admin_id: 2, draft: true , appr_status: false,image_url:'./xxx.jpg'},
        {name: 'Green Papaya Salad ', cookingtime: '20mins', difficulty: 2, admin_id: 4, draft: false , appr_status: false,image_url:'./xxx.jpg'},
        {name: 'Eggtart', cookingtime: '45mins', difficulty: 3.3, admin_id: 1, draft: false , appr_status: true,image_url:'./xxx.jpg'},
        {name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 4.0, admin_id: 1, draft: false , appr_status: false,image_url:'./xxx.jpg'}
      ]);
    
};

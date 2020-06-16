
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeTable').insert([
        {id: 1, name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 3, admin_id: 3, draft: false , appr_status: true, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/150234_fa5374fa89e830c563fc058b4be15871.png'},
        {id: 2, name: 'Tofu Pudding', cookingtime: '45mins', difficulty: 4.5, admin_id: 4, draft: false , appr_status: true, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/162115_9f590c16db923da6311d4daff4e7a72c.png'},
        {id: 3, name: 'Three Stuffed Treasures', cookingtime: '20mins', difficulty: 3.8, admin_id: 2, draft: false , appr_status: true, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/161854_281e5fdc9b1fe90c093f55f3f46cd6cf.jpg'},
        {id: 4, name: 'Fake "Shark Fin" Soup', cookingtime: '20mins', difficulty: 3.2, admin_id: 2, draft: true , appr_status: false, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/161914_047a1115bbec21443c9126dcae709ad9.png'},
        {id: 5, name: 'Green Papaya Salad ', cookingtime: '20mins', difficulty: 2, admin_id: 4, draft: false , appr_status: false, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/161940_75e5631128c47d3e3ecd930dbcc514ab.png'},
        {id: 6, name: 'Eggtart', cookingtime: '45mins', difficulty: 3.3, admin_id: 1, draft: false , appr_status: true, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/162011_fa24b0f62755519b65837c3d243be9c4.png'},
        {id: 7, name: 'super easy Egg Waffle', cookingtime: '30mins', difficulty: 4.0, admin_id: 2, draft: false , appr_status: false, image_url: 'https://img.eservice-hk.net/upload/2020/06/15/162029_89dd9b414a8978212487b77e8549e93c.png'}
      ]);
    });
};

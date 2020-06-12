
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foodTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodTable').insert([
        {id: 1, food_name: 'Egg Waffles',local_name: 'Gai Daan Zai',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 2, food_name: 'Tofu Pudding',local_name: 'Dao fu fa',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 3, food_name: 'Pineapple Buns ',local_name: 'Boh Loh Yau',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 4, food_name: 'Three Stuffed Treasures ',local_name: 'Jin yeung saam bo',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 5, food_name: 'FAKE “shark fin” soup',local_name: 'Wun Jai Ci ',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 6, food_name: 'Thai Stir Fried Noodle',local_name: 'Pad See Eiw',cuisine_name: 'Thai',imageurl:'./xxx.jpg'},
        {id: 7, food_name: 'Green Papaya Salad',local_name: 'Som Tam',cuisine_name: 'Thai',imageurl:'./xxx.jpg'},
        {id: 8, food_name: 'Ramen',local_name: 'N/A',cuisine_name: 'Japanese',imageurl:'./xxx.jpg'},
        {id: 9, food_name: 'Steamed Rice Pudding',local_name: 'Boot Zai Go',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 10, food_name: 'Eggtart',local_name: 'Dan Tart',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 11, food_name: 'Mango and pomelo sago',local_name: 'N/A',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 12, food_name: 'Pantyhose milk tea',local_name: 'N/A',cuisine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {id: 13, food_name: 'Stewed Pork Leg and Rice',local_name: 'Khao Kha Moo',cuisine_name: 'Thai',imageurl:'./xxx.jpg'},
        {id: 14, food_name: 'Sticky rice with mango',local_name: 'Kao Niew Ma Muang',cuisine_name: 'Thai',imageurl:'./xxx.jpg'}
      ]);
    });
};

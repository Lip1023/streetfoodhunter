
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('foodTable').insert([
        {food_name: 'Egg Waffles',local_name: 'Gai Daan Zai',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Tofu Pudding',local_name: 'Dao fu fa',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Pineapple Buns ',local_name: 'Boh Loh Yau',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Three Stuffed Treasures ',local_name: 'Jin yeung saam bo',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'FAKE “shark fin” soup',local_name: 'Wun Jai Ci ',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Thai Stir Fried Noodle',local_name: 'Pad See Eiw',cusine_name: 'Thai',imageurl:'./xxx.jpg'},
        {food_name: 'Green Papaya Salad',local_name: 'Som Tam',cusine_name: 'Thai',imageurl:'./xxx.jpg'},
        {food_name: 'Ramen',local_name: 'N/A',cusine_name: 'Japanese',imageurl:'./xxx.jpg'},
        {food_name: 'Steamed Rice Pudding',local_name: 'Boot Zai Go',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Eggtart',local_name: 'Dan Tart',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Mango and pomelo sago',local_name: 'N/A',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Pantyhose milk tea',local_name: 'N/A',cusine_name: 'HongKongese',imageurl:'./xxx.jpg'},
        {food_name: 'Stewed Pork Leg and Rice',local_name: 'Khao Kha Moo',cusine_name: 'Thai',imageurl:'./xxx.jpg'},
        {food_name: 'Sticky rice with mango',local_name: 'Kao Niew Ma Muang',cusine_name: 'Thai',imageurl:'./xxx.jpg'}
      ]);
 
};

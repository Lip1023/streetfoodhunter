
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foodTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('foodTable').insert([
        {id: 1, food_name: 'Egg Waffles',local_name: 'Gai Daan Zai',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/150426_c6169ba733db6ebab43f63be170fd820.png'},
        {id: 2, food_name: 'Tofu Pudding',local_name: 'Dao fu fa',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160610_b5e62f3abeb247c873a78d5cb855b508.png'},
        {id: 3, food_name: 'Pineapple Buns ',local_name: 'Boh Loh Yau',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160705_8ea54604c81cb81e78a61bc2ade350d3.png'},
        {id: 4, food_name: 'Three Stuffed Treasures ',local_name: 'Jin yeung saam bo',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160751_4c7d6be5c41928174667fcc58304b8a0.png'},
        {id: 5, food_name: 'FAKE “shark fin” soup',local_name: 'Wun Jai Ci ',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160821_1bb2c2eb9992e045e35607e74cba8b4d.png'},
        {id: 6, food_name: 'Thai Stir Fried Noodle',local_name: 'Pad See Eiw',cuisine_name: 'Thai',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160859_b7b77c006d4e356d9f28f092a9f12fb5.png'},
        {id: 7, food_name: 'Green Papaya Salad',local_name: 'Som Tam',cuisine_name: 'Thai',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/160930_25c43eecc0e350015a2c6ed32cc44f8c.png'},
        {id: 8, food_name: 'Ramen',local_name: 'N/A',cuisine_name: 'Japanese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161411_b68efd940e68feb43073ed16586c0f75.jpg'},
        {id: 9, food_name: 'Steamed Rice Pudding',local_name: 'Boot Zai Go',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161442_e5e328c3dc4fe53f73f909905a4c0268.png'},
        {id: 10, food_name: 'Eggtart',local_name: 'Dan Tart',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161523_5d056e83cdee15b3813f6d7c38a46126.png'},
        {id: 11, food_name: 'Mango and pomelo sago',local_name: 'N/A',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161555_95eefd43b61c10f543cd73e8e4937378.png'},
        {id: 12, food_name: 'Pantyhose milk tea',local_name: 'N/A',cuisine_name: 'HongKongese',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161622_41001cda24ec48d121e60035d66336f6.png'},
        {id: 13, food_name: 'Stewed Pork Leg and Rice',local_name: 'Khao Kha Moo',cuisine_name: 'Thai',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161308_d0d933430c7fe4360a64501ea0e1a19b.jpg'},
        {id: 14, food_name: 'Sticky rice with mango',local_name: 'Kao Niew Ma Muang',cuisine_name: 'Thai',imageurl:'https://img.eservice-hk.net/upload/2020/06/15/161746_44ee0a5d75234d9dfafb6f829ddcd434.jpg'}
      ]);
    });
};
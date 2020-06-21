
exports.seed = function(knex,Promise) {
  // Deletes ALL existing entries

      return knex('recipeTable').insert([
        {
          "name" : "super easy Egg Waffles ",
          "cookingtime" : "30",
          "difficulty" : 3.0,
          "admin_id" : 3,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/150234_fa5374fa89e830c563fc058b4be15871.png"
        },
        {
          "name" : "Tofu Pudding",
          "cookingtime" : "45",
          "difficulty" : 4.5,
          "admin_id" : 4,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/162115_9f590c16db923da6311d4daff4e7a72c.png"
        },
        {
          "name" : "Three Stuffed Treasures ",
          "cookingtime" : "20",
          "difficulty" : 3.8,
          "admin_id" : 2,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/161854_281e5fdc9b1fe90c093f55f3f46cd6cf.jpg"
        },
        {
          "name" : "“shark fin” soup",
          "cookingtime" : "20",
          "difficulty" : 3.2,
          "admin_id" : 2,
          "draft" : true,
          "appr_status" : false,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/161914_047a1115bbec21443c9126dcae709ad9.png"
        },
        {
      
          "name" : "Green Papaya Salad ",
          "cookingtime" : "20",
          "difficulty" : 2.0,
          "admin_id" : 4,
          "draft" : false,
          "appr_status" : false,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/161940_75e5631128c47d3e3ecd930dbcc514ab.png"
        },
        {
          "name" : "Eggtart",
          "cookingtime" : "45",
          "difficulty" : 3.3,
          "admin_id" : 1,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/162011_fa24b0f62755519b65837c3d243be9c4.png"
        },
        {	"name" : "Thai Sticky mango rice",
          "cookingtime" : "45",
          "difficulty" : 4.0,
          "admin_id" : 3,
          "draft" : false,
          "appr_status" : false,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/15\/162029_89dd9b414a8978212487b77e8549e93c.png"
        },
        {
          "name" : "Easy Green Papaya Salad",
          "cookingtime" : "15",
          "difficulty" : 1.5,
          "admin_id" : 2,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/155819_d6c8e5408156662bcb9739e42efecb8c.jpg"
        },
        {
          "name" : "Coconut Put Zai Go Pudding Cake",
          "cookingtime" : "20",
          "difficulty" : 2.0,
          "admin_id" : 2,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/160128_3893a6d02daf4315b3fec376cccc2efb.jpg"
        },
        {
          "name" : "Pad See Ew (Thai Stir Fried Noodle)",
          "cookingtime" : "45",
          "difficulty" : 3.5,
          "admin_id" : 4,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/160512_a9f030ca1ca036f2f9bded4ab3278324.jpg"
        },
        {
          "name" : "Easy Homemade Ramen",
          "cookingtime" : "30",
          "difficulty" : 2.8,
          "admin_id" : 3,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/160736_66c740fcd10a15b641d49e4774b0cccc.jpg" 
        },
        {
          "name" : "Mango Pomelo Sago Dessert",
          "cookingtime" : "30mins",
          "difficulty" : 2.0,
          "admin_id" : 2,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/160931_c46046afdd97824555597cf50a27edc8.jpg"
        },
        {
          "name" : "Pantyhose milk tea",
          "cookingtime" : "15",
          "difficulty" : 1.2,
          "admin_id" : 1,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/161614_32ec6e79be7ecb67d1b3c35c38e82e60.jpg"
        },
        {
          "name" : "Stewed Pork Leg and Rice",
          "cookingtime" : "50",
          "difficulty" : 4.3,
          "admin_id" : 3,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/17\/161906_65c4f881865449c5b268c7ab68b306b2.jpg"
        },
        {
      
          "name" : "Japanese ramen ",
          "cookingtime" : "51",
          "difficulty" : 2.0,
          "admin_id" : 4,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/21\/140903_611f85ff508f7475a6513cc253539d1b.jpg"
        },
        {
          "name" : "Japanese ramen noodle ",
          "cookingtime" : "52",
          "difficulty" : 2.0,
          "admin_id" : 2,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/21\/132329_20d1af1197236502b1d442deedd0f565.jpg"
        },
        {
          "name" : "Japanese ramen noodle soup",
          "cookingtime" : "53",
          "difficulty" : 2.0,
          "admin_id" : 3,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/21\/132405_aee7a297f39b1ac3b262efa17dfd2197.jpg"
        },
        {
          "name" : "Japanese ramen noodle soup soup",
          "cookingtime" : "54",
          "difficulty" : 2.0,
          "admin_id" : 5,
          "draft" : false,
          "appr_status" : true,
          "image_url" : "https:\/\/img.eservice-hk.net\/upload\/2020\/06\/21\/132427_9de3a15a143080d001f8fc3b59b52d54.jpg"
        }
      ]);
  
};
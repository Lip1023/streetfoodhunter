module.exports = (express) => {
  const router = express.Router();

//   function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect("/signup");
//   }

let list1 = {
    recipe: [
    {
        "recipe_id": 1,
        "recipe_name": "Spicy Fishball",
        "users_user_id": "pullip123",
        "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
        "recipe_rating": '74'
    },{
        "recipe_id": 2,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '45'
    },{
        "recipe_id": 3,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '24'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '66'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '47'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '56'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '50'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '100'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '47'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '56'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '50'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '100'
    }]
}
//let list1 = {recipe:[]};
// RECIPE
//recipe index page
    router.get('/recipe', (req, res)=>{
        res.render('recipeindex',list1 )
    });
//recipe adding page
    router.get('/newrecipe',(req, res)=>{
        res.render('newrecipe')
    });
//adding new recipe
    router.post('/newrecipe', (req, res) => {
        console.log(req.body);
        res.send("completed");
    });


let result = {
    id: 1,
    name:"Spicy Fishball",
    difficulty: 20,
    cookingtime: 20,
    ingredient: 'fish: 100g, flour: 200g, water: 1/2 cup, garlic 2coves, 1 medium sized onion, 1tbs salt, 2 eggs, 5 red chillis, Frying-Oil',
    how_to: ['Take out skin of the fish', 'Boil the fish(including bones), garlic and onion for 10minutes', 'Mix flour with 1/2 of warm luke water(50°C) and leave it until cooking fish is done', 'Take out bones from the fish, mash the meat with garlic and onion', 'Mix the mashed fish with flour, add 1tbs of salt', 'Chop spicy chilli into small pieces', 'Make ball shapes of fish-flour mix and roll them on chilli pieces', 'Soak the fishball in eggwater', 'Fry them for 5 minutes in 180°C oil' ],
    imgae_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg"
};

// function numberToStars(num) {
//     let str1 = "";
//     for(let i = 0; i < num; i++) {str1 += "★";};
//     return str1.padEnd(5, '☆');
// }


// function numberToDias(num) {
//     let str1 = "";
//     for(let i = 0; i < num; i++) {str1 += "◆";};
//     return str1.padEnd(5, '◇');
// }


// result.difficulty = numberToStars(result.difficulty);

    router.get('/recipe:1', (req, res)=>{
        res.render('recipe', result)
    });
//

//post recipe
router.post('/comment', (req, res)=>{
    console.log(req.body);
    res.send("completed");
});
//

let list2 = {
    my_recipe: [{
        "recipe_id": 1,
        "recipe_name": "Spicy Fishball",
        "recipe_difficulty": "3",
        "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
        "recipe_rating": '74'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "recipe_difficulty": "4",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '50'
    }],
    fav_recipe: [{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_difficulty": "4",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '50'
    },{
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_difficulty": "4",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '50'
    }]
}

  return router;
};
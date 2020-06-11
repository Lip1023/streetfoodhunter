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
        "recipe_id": 0,
        "recipe_name": "Recipe Name",
        "users_user_id": "Username",
        "recipe_image_url": "fishball.jpg",
        "recipe_rating": '45'
    },{
        "recipe_id": 0,
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
    }]
}
//let list1 = {recipe:[]};
// RECIPE
//recipe index page
    router.get('/recipe', (req, res)=>{
        res.render('recipeindex',list1 )
    });
//adding new recipe
    router.get('/newrecipe',(req, res)=>{
        res.render('newrecipe')
    });

    router.post('/newrecipe', (req, res) => {
        console.log(req.body);
        res.send("completed");
    });

    router.post('/relatedrecipe', (req, res) => {
        console.log(req.body);
        res.send("completed");
    });

let result = {
    id: 1,
    name:"Spicy Fishball",
    difficulty: 1,
    cookingtime: 20,
    ingredient: 'fish: 100g, flour: 200g, water: 1/2 cup',
    how_to: ['do somthing', 'do something more', 'do some thing again', 'eat it'],
    imgae_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg"
};

function numberToStars(num) {
    let str1 = "";
    for(let i = 0; i < num; i++) {str1 += "★";};
    return str1.padEnd(5, '☆');
}


// function numberToDias(num) {
//     let str1 = "";
//     for(let i = 0; i < num; i++) {str1 += "◆";};
//     return str1.padEnd(5, '◇');
// }


result.difficulty = numberToStars(result.difficulty);

//hardcoding the id for now
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
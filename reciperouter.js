const {
    getUserNameFromID,
    getRatingFromRecipeID,
    readAllRecipes,
    readRecipeList,
    readRecipeFromID,
    readCommentsByUser,
    writeRecipe,
    writeRecipeTable,
    writeIngredient,
    writeHowTo,
    initializeVote,
    postComment,
    updateVote,
    deleteComment,
    getMyPage,
    addFavourite,
    deleteFavourite
  } = require('./recipe');

  module.exports = (express) => {
  const router = express.Router();

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
  }
  
  function insertUserInfo (obj, userobj) {
      obj.user_id = userobj.id;
      obj.full_name = userobj.full_name;
      obj.user_name = userobj.user_name;
      obj.email = userobj.email;
  }

//let list1 = {recipe:[]};
// RECIPE
//recipe index page
    router.get('/recipe', isLoggedIn, (req, res)=>{
        let promise1 = readRecipeList(req.body.tag);
        promise1.then((list1) => {
            insertUserInfo(list1, req.session.passport.user);
            res.render('recipeindex',list1);
        });
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

    router.get('/recipe/:id', (req, res)=>{
        let promise1 = readRecipeFromID(req.params.id);
        promise1.then((list1) => {
            insertUserInfo(list1, req.session.passport.user);
            console.log(list1);
            res.render('recipe',list1);
        });
    });

//post recipe comment
    router.post('/comment', (req, res)=>{
        console.log(req.body);
        res.send("completed");
    });
//

return router;
};
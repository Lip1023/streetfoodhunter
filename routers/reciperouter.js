const {
    getUserNameFromID,
    getRatingFromRecipeID,
    readAllRecipes,
    readRecipeList,
    readRecipeFromID,
    readCommentsByUser,
    writeRecipe,
    readAllMarks,
    readFoodFromCuisine,
    writeRecipeTable,
    writeIngredient,
    writeHowTo,
    writeFoodName,
    writeTag,
    initializeVote,
    postComment,
    updateVote,
    deleteComment,
    getMyPage,
    addFavourite,
    deleteFavourite,
  } = require('../services/recipe');
  const {
    filterRPname,
    filterUSname,
    filterFDname,
  } = require('../services/service');

  module.exports = (express) => {
  const router = express.Router();

  function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) {
          return next();
      }
      req.session.referrer = req.originalUrl;
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
        // console.log(req.query);
        if (Object.keys(req.query).length === 0 && req.query.constructor === Object) {
            delete req.session.search;
        };
        let promise1 = null;
        // console.log(req.session.search);
        if (req.session.search) {
            switch (req.session.search.selectTB) {
                case "RP":
                    promise1 = filterRPname(req.session.search.word, req.query.order_by);
                break;
                case "FD":
                    promise1 = filterFDname(req.session.search.word, req.query.order_by);
                break;
                case "US":
                    promise1 = filterUSname(req.session.search.word, req.query.order_by);
                break;
                default:
                    promise1 = readRecipeList(req.query.tag, req.query.order_by);
            }
        } else {
            promise1 = readRecipeList(req.query.tag, req.query.order_by);
        }
        promise1.then((list1) => {
            insertUserInfo(list1, req.session.passport.user);
            list1 = {...list1, ...req.session.search};
            res.render('recipeindex',list1);
        });
    });

    //search function - rendering recipe index page
    router.post('/search', (req, res) => {
        req.session.search = req.body;
        res.redirect("/recipe?search=");
    });

//recipe adding page
    router.get('/newrecipe', isLoggedIn, (req, res)=>{
        let promise1 = readAllMarks();
        let promise2 = readFoodFromCuisine(req.query.cuisine_name);
        Promise.all([promise1,promise2]).then((list1) => {
            let list2 = {...list1[0], ...list1[1]};
            insertUserInfo(list2, req.session.passport.user);
            res.render('newrecipe',list2);
        });
    });
//adding new recipe
    router.post('/newrecipe', isLoggedIn, (req, res) => {
        let list1 = req.body;
        insertUserInfo(list1, req.session.passport.user);
        let promise1 = writeRecipe(list1);
        promise1.then(() => {
            res.send("completed");
        });
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

    router.get('/recipe::id', isLoggedIn, (req, res)=>{
        let promise1 = readRecipeFromID(req.params.id);
        promise1.then((list1) => {
            insertUserInfo(list1, req.session.passport.user);
            res.render('recipe',list1);
        });
    });

//post recipe comment
    router.post('/comment', isLoggedIn, (req, res)=>{
        if (req.body.comment_content.length > 0) {
            postComment(req.session.passport.user.id, req.body.recipe_id, req.body.comment_content);
        }
        updateVote(req.body.recipe_id, req.body.rating);
        res.send("Well received.");
    });

//add favourite recipe
router.post('/addfav', isLoggedIn, (req, res)=>{
    addFavourite(req.session.passport.user.id, req.body.recipe_id);
    res.send("Favourite added");
});

//delete favourite recipe
router.post('/deletefav', isLoggedIn, (req, res)=>{
    deleteFavourite(req.session.passport.user.id, req.body.recipe_id);
    res.send("Favourite removed");
});

return router;
};
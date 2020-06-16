const passport = require("passport");
const commentoSSO = require('./commentoSSO');

module.exports = (express) => {
  const router = express.Router();

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signup");
  }

  
  router.get(
    "/auth/twitter",
    passport.authenticate("twitter")
  );
  // Redirect the user to twitter for authentication.  When complete,
  // twitter will redirect the user back to the application at
  //     /auth/twitter/callback

  router.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
  // twitter will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.

  router.get(
    "/auth/google",
    passport.authenticate('google', { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ] })
  );
  // Redirect the user to google for authentication.  When complete,
  // google will redirect the user back to the application at
  //     /auth/google/callback

  router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
  // google will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.

  router.get("/sso/commento", isLoggedIn, (req, res) => {
    commentoSSO(req.query, req.user)
    .then((url)=>{
      res.status(302).redirect(url);
    })
    .catch((err)=>{
      res.redirect("/signup");
    });
  });

  router.get("/login", (req, res) => {
    res.render('login');
  });

  router.get("/mypagecopy", (req, res) =>{
    res.render('mypagecopy')
  })


let userresult= {
  users_user_id: "pullip123",
  recipe:[
  {
   "recipe_id": "1",
   "recipe_name": "Spicy Fishball",
   "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
   "recipe_rating": "74",
   "recipe_difficulty": "90"
  },
  { 
   "recipe_id": "2",
   "recipe_name": "Sweet Fishball",
   "recipe_image_url": "https://i2.wp.com/tasteful.ph/wp-content/uploads/2018/02/fishballMAIN-1.jpg?resize=1080%2C720&ssl=1",
   "recipe_rating": "45",
   "recipe_difficulty": "10"
  },
  { 
  "recipe_id": "3",
  "recipe_name": "Sour Fishball",
  "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
  "recipe_rating": "81",
  "recipe_difficulty": "10"
 }
],

favourite:[
  { 
    "users_user_id": "alex123",
    "recipe_id": "4",
    "recipe_name": "Drunken siumai",
    "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
    "recipe_rating": "74",
    "recipe_difficulty": "50"
   },
   { 
    "users_user_id": "christine123",
    "recipe_id": "5",
    "recipe_name": "Sweet siumai",
    "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
    "recipe_rating": "45",
    "recipe_difficulty": "30"
   },
   {  
   "users_user_id": "tom123",
   "recipe_id": "6",
   "recipe_name": "Sour siumai",
   "recipe_image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fishball.jpg/1200px-Fishball.jpg",
   "recipe_rating": "81",
   "recipe_difficulty": "70"
  }
]


}

  router.get("/mypage", (req, res) => {
    res.render('mypage', userresult);
    console.log(userresult);
    // console.log(req.user.id);
    // console.log(req.session.id);
    // console.log(req.user);

    // res.send('This is a secret page (or rather message) you will get this on a successful login.');
    // res.sendFile(__dirname + "/html/mypage.html");
  });

  router.get("/error", (req, res) => {
    res.send("You're not logged in. Please login.");
  });

  router.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/error",
    })
  );

  router.get("/signup", (req, res) => {
    res.render('signup')
  });

  router.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/error",
    })
  );

  router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return next(err);

      req.logout();

      res.redirect("/login");
    });
  });


  router.get('/forgotpassword',(req,res)=>{
    res.render('forgotpassword')
})

  return router;
};
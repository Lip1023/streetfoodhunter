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

  router.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
  });

  router.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["email", "user_gender", "user_link"],
    })
  );
  // Redirect the user to Facebook for authentication.  When complete,
  // Facebook will redirect the user back to the application at
  //     /auth/facebook/callback

  router.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );
  // Facebook will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.

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
    res.sendFile(__dirname + "/html/login.html");
  });

  // router.get("/mypage", isLoggedIn, (req, res) => {
  //   console.log(req.user.id);
  //   console.log(req.session.id);
  //   console.log(req.user);

  //   // res.send('This is a secret page (or rather message) you will get this on a successful login.');
  //   res.sendFile(__dirname + "/html/mypage.html");
  // });

  router.get("/error", (req, res) => {
    res.send("You've not logged in. Please login.");
  });

  router.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/error",
    })
  );

  router.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/html/signup.html");
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

  return router;
};
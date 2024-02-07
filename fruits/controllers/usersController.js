////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// The Signup Routes (Get => form, post => submit form)
router.get("/signup", (req, res) => {
  res.render("users/Signup.jsx");
});

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
  User.create(req.body)
  .then(user => res.redirect('/users/login'))
  .catch(error => {
    console.error(err);
    res.status(400).json({err});
  })

});

// The login Routes (Get => form, post => submit form)
router.get("/login", (req, res) => {
  res.render("users/Login.jsx");
});

router.post("/login", async (req, res) => {
   // get the data from the request body
   const { username, password } = req.body;
   // search for the user
   User.findOne({ username })
     .then(async (user) => {
       // check if user exists
       if (user) {
         // compare password
         const result = await bcrypt.compare(password, user.password);
         if (result) {
            // store some properties in the session object
          req.session.username = username;
          req.session.loggedIn = true;
           // redirect to fruits page if successful
           res.redirect("/fruits");
         } else {
           // error if password doesn't match
           res.json({ error: "password doesn't match" });
         }
       } else {
         // send error if user doesn't exist
         res.json({ error: "user doesn't exist" });
       }
     })
     .catch((error) => {
       // send error as json
       console.log(error);
       res.status(400).json({ error });
     });

});

router.get("/logout", (req, res) => {
    // destroy session and redirect to main page
    req.session.destroy((err) => {
      res.redirect("/");
    });
  });
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;
/*

C - create a user -register
R - read user information
   - > list of users
   - > detailed version of a user(item)
   - > user profile
U - update user information
   - > update user profile
   - > update user image
   - > forgot password
D - delete user
   - > delete user account
*/

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const brypt = require("bcryptjs");

router.post("/register",(req, res) => {
    // 1 - parse data
    const { firstName, lastName, email, password } = req.body;
    // 2 - validate data

    // 3 - create a document for the new user
    const newUser = new User({
        firstName,
        lastName,
        email,
        password
    });
    // 4 - save the user
    newUser
        .save()
        .then(result => {res.json(result);})
        .catch((err) => {
            res.status(404).json(err);
        });
    // 5 - send a confirmation to front-end


});

router.post("/login",(req, res) => {});

module.exports = router;
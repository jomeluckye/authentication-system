const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../middleware/auth');

//import the router controller
const usersController = require('../controllers/usersController');

//Login user route
router.post('/api/auth/login',
[
    check("email", "Please enter a valid email").isEmail(),
    check("password", "A valid password is required.").exists(),
], 
usersController.loginUser
);

router.get("/api/auth", auth, usersController.getLoggerInUser);

module.exports = router;
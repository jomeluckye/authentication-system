const express = require('express');
const router = express.Router();

//import the router controller
const usersController = require('../controllers/usersController');

//Login user route
router.post('/api/auth/login', usersController.loginUser);
const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//@route      POST api/auth/login
//@Desc       Auth user(Student, Tutor, Admin) and get token
//@Access     Public
exports.loginUser = async (req, res) =>{
    //Check
}

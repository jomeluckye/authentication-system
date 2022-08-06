const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//@route      POST api/auth/login
//@Desc       Auth user(Student, Tutor, Admin) and get token
//@Access     Public
exports.loginUser = async (req, res) =>{
    //Check for errors
    const errors = validationResult(req);
    if(!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

    //else
    //Use destructure request body
    const {email, password} = req.body;

    try {
        //Initialise user
        let user = await User.findOne({email})
    if(!user) return res.status(400).json({
        statusCode: 400,
        message: "Invalid credentials" 
    });

    //else...
    //Check the password
    }catch (error){

    }

}

const mongoose  = require('mongoose');

//Create User Schema
const UserSchema = mongoose.Schema(
    {
        //Define the properties of the 
        //application user
        firstName: {
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String 
        },
        userRole:{
            type: String,
            enum: ["admin", "staff", "managers", "users"],
            default: "not assigned"
        },
        isTutor:{
            type: Boolean,
            default: 0
        },
        isAdmin:{
            type: Boolean,
            default: 0
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema)

//Check to see if there's a token and header
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    //Get token from header
    const token = req.header("x-auth-token");
}
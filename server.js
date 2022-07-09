/*
This to do in this server.js file
    1. Creating an express server 
    2. Connect to mongodb
    3. Initialise express
    4. Initilise express middleware
    5. Create a simple get request route (Optional)
    6. Inject our routes
    7. Listen to our app connection
*/

const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); //Allows us to use the environmental variable in .env
const { PORT } = process.env //Disconstruct method use in vanilla Javascript
//proces.env.PORT is used when you are not Disconstruct an object.

//Connect to db
connectDB();

//Initialise express
const app = express();

//Initilise the express middleware
app.use(express.json({ extended: false}));

//Create a basic express app
app.get('/', (req, res) => res.json({
    message: "Welcome to Node and Express course."
}));

//Create a PORT
const port = process.env.PORT || PORT;

//Listen to app connection
app.listen(port, () => console.log(`app running on Port ${port}`));


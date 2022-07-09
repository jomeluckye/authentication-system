/**
 *  1. Create a connection function for mongodb
 *  2. Start a local mongodb server connection
 */

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

//Create a connection function
// const connectDB = () => {
//  mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//  })
//  .then( () => {
//     console.log("MongoDB connected....");

//     // Seed data
//  })
//  .catch( (err) => {
//     console.error(err.message);

//     //Exit with failure
//     process.exit(1);
//  })
// }

//Another Effecient way of connecting to your database
//is to use the Async and await function which returns a promise
const connectDB = async () => {
   try {
      await mongoose.connect(MONGO_URI, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology: true,
         useFindAndModify: false
      });

      console.log("MongoDB connected...");

      // Seed data
   } catch (err) {
      console.log(err.message);

      //Exit with failure
      process.exit(1);
   } 
}
module.exports = connectDB;
const mongoose = require('mongoose');
require('dotenv').config();

/* Connect Mongoose Here */

const createDatabaseConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }, (err) => {
        if(err){
            console.log(`Error: ${err.message}`);
            process.exit(1);
        }
        console.log("Connected to the Database");
    });
}
console.log(process.env.DATABASE_URL)
module.exports = createDatabaseConnection;
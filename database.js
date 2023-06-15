const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const mongoUrl = process.env.DATABASE;

const DatabaseConnection =  async()=>{
    try {
      await mongoose.connect(mongoUrl)
      .then(()=>{console.log("Database connected successfully")})
      .catch((error)=>{ console.log("Database couldn't connected!", error.message)})
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = DatabaseConnection;
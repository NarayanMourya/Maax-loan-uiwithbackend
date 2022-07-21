// const { default: mongoose } = require("mongoose");



const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test008")
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

const mongooseschema = mongoose.Schema({
  name:String,
  email:String,
  number:String,  
})

module.exports = mongoose.model("user",mongooseschema);
let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
    user_picture:String,
    user_name:String,
    user_email:String,
    user_password:String,
    user_reviews:Array
})

let User = mongoose.model('user', userSchema)

module.exports = User;

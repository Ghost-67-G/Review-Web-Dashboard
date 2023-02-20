const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    user_name:String,
    company_name:String,
    review:String,
    rating:Number,
    title:String,
    date:String,
    spendTime:String
})

const Review = mongoose.model('review', reviewSchema)

module.exports = Review;

const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  company_name: String,
  company_logo: String,
  company_rating: Number,
  company_website: String,
  company_location: String,
  company_category: Array,
  company_reviews: Array,
  company_description: String,
  company_coupon: String,
});
const Company = mongoose.model("company", companySchema);

module.exports = Company;
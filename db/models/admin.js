const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    admin_email:String,
    admin_password:String
});
const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
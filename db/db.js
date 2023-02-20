let mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://AyanNaseer:G-Gamer67@cluster0.sx7eyhu.mongodb.net/ReviewSite?w=majority', (err , connection)=>{

    console.log( connection || err);

})
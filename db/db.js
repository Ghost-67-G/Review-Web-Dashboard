let mongoose = require("mongoose");
mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://mrjay:yZxeO3CC4A12LSHo@propfirmrating.ozjnr5r.mongodb.net/ReviewSite?w=majority', (err , connection)=>{

    console.log( connection || err);

})
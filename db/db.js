let mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://custmerg476:Y2xmDrPYuHOtdPl1@cluster.gyxsstr.mongodb.net/ReviewSite?w=majority', (err , connection)=>{

    console.log( connection || err);

})
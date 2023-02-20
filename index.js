const myExpress = require('express')
const app = myExpress()
const userRoute = require('./routes/users')
const companyRoute = require('./routes/company')
const searchRoute = require('./routes/search')
const reviewRoute = require('./routes/review')
app.use(myExpress.json());

require("./db/db")


// app.use(myExpress.static('./build'));
app.use(userRoute)
app.use(companyRoute)
app.use(searchRoute)
app.use(reviewRoute)

app.listen(process.env.PORT||2700,()=>{console.log("Hello, Sever is running")})
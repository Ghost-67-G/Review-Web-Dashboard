const route = require("express").Router();
const Review = require("../db/models/reviews");
const User = require("../db/models/users");
const Company = require("../db/models/company");



route.post("/submit-review", async(req, resp)=>{
    let review = new Review(req.body.data)
    await User.findByIdAndUpdate(req.body.id.user_id,{ $push: { user_reviews: req.body.data } })
    await Company.findByIdAndUpdate(req.body.id.company_id,{ $push: { company_reviews: req.body.data } })
    await review.save()
    resp.end()
})

route.get("/get-admin-reviews",async(req,resp)=>{
    const reviews = await Review.find()
    resp.json({reviews})
})



route.delete("/delete-review", async (req, resp) => {
    await Review.findByIdAndDelete(req.query.obj.id);
    User.findOne({user_name:req.query.obj.user},(err,user)=>{
        let index = user.user_reviews.findIndex((item)=>item.review==req.query.obj.review)
        user.user_reviews.splice(index,1)
        user.save()
    })
    Company.findOne({company_name:req.query.obj.company},(err,company)=>{
        let index = company.company_reviews.findIndex((item)=>item.review==req.query.obj.review)
        company.company_reviews.splice(index,1)
        company.save()
    })
    resp.json({ success: true });
  });


  route.get('/get-recent-reviews',async(req,resp)=>{
    const reviews =await Review.find()
    if(reviews.length<=8){
        resp.json({reviews})
    }else{
        let small = reviews.slice(0,8)
        resp.json({reviews:small})
    }
  })



module.exports = route;
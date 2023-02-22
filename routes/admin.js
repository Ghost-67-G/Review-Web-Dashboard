const route = require("express").Router();
const Admin = require("../db/models/admin");
const jsonwebtoken = require('jsonwebtoken');



route.post("/admin-login", async (req, resp) => {
    let admin = await Admin.findOne(req.body);
    if (admin) {
      jsonwebtoken.sign({ id: admin._id }, "cat says miooon in FSD", {
          expiresIn: "1d"
      }, function (err, Token) {
          resp.json({
              success:true,
              admin,
              token: Token
          });
      })
    }
  });
  route.post('/admin-check-session', (req, res) => {
    jsonwebtoken.verify(req.body.token, "cat says miooon in FSD", async (err, data) => {
        res.json({success:true});
    })
  
  });
  


module.exports = route;

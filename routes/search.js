const route = require("express").Router();
const Company = require("../db/models/company");

route.get("/get-search-companies", async (req, resp) => {
  let companies = await Company.find();
  let searchCompanies = companies.filter((company) => {
    let catagories = company.company_category[0].split(",");
    let companyName = company.company_name.toLowerCase()
    if (companyName.match(req.query.word.toLowerCase())) {
      return company;
    } else {
      for (let catagory of catagories) {
        if (req.query.word.toLowerCase() == catagory.toLowerCase()) {
          return company;
        }
      }
    }
  });

  resp.json({ success: true, searchCompanies });
});

module.exports = route;

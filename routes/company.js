const route = require("express").Router();
const Company = require("../db/models/company");
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dgjsh3d3n",
  api_key: "244459248568857",
  api_secret: "jsK9tbnB4x8PwCcHtuvzSgTNPqY",
  // secure: true,
});

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("Unsupported file type!"), false);
      return;
    }
    cb(null, true);
  },
});
// let upload = multer({ storage: storage });

route.post("/add-company", upload.single("company_logo"), async (req, resp) => {
  cloudinary.uploader.upload(req.file.path,async (err, result) => {
    req.body.company_logo = result.url
    let company = new Company(req.body);
    await company.save();
  });

  resp.json({
    success: true,
  });
});

route.delete("/delete-company", async (req, resp) => {
  await Company.findByIdAndDelete(req.query.id);
  resp.json({ success: true });
});


route.get("/for-update-company", async (req, resp) => {
  let company = await Company.findById(req.query.id);
  resp.json({ company });
});
route.put(
  "/update-company",
  upload.single("company_logo"),
  async (req, resp) => {
    await Company.findByIdAndUpdate(req.body._id, req.body);
    resp.json({ success: true });
  }
);

route.get("/get-companies", async (req, resp) => {
  let companies = await Company.find();
  resp.json({ companies });
});

route.get("/get-company", async (req, resp) => {
  let company = await Company.findById(req.query.id);
  resp.json({ company });
});

module.exports = route;

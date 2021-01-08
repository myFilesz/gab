//Express
const express = require("express");
const router = express.Router();

//cors
const cors = require("cors");

//multer
const multer = require('multer');
const multerConfig = require('../config/multer');

//Controllers
const UsersController = require("../controller/users-controller");
const usersController = new UsersController();

//---Middlewares---//
//cors
const { corsOption } = require("../app");

router.use((req, res, next) => {
  res.header(corsOption);
  router.use(cors());
  next();
});

router.get("/registro", usersController.registro());

router.post('/uploadimg', multer(multerConfig).single('file'), (req,res)=>{
  const name = req.file.originalname;

  const data ={
      url: `http://localhost:38001/images/products/fiec-${name}`
  }
  console.log(data.url);
  return res.json(data);
})

// router.post("/listar", usersController.listar());

module.exports = router;

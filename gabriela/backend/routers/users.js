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

router.post("/registro", usersController.registro());

router.post('/uploadImg', multer(multerConfig).single('file'), (req,res)=>{
  const { originalname: name } = req.file;

  const data ={
      name :name,
      url: `http://localhost:38001/images/${name}`
  }
  console.log(data.url);
  return res.json(data);
})

router.get("/listar", usersController.listar());

module.exports = router;

//Express
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const path = require('path')

//routers
const routerUsers = require("./routers/users");

//---Middlewares---//


//cors
const corsOption = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
};
app.use((req, res, next) => {
  res.header(corsOption);
  app.use(cors());
  next();
});

app.use('/images/products', express.static(path.resolve(__dirname,'uploads', 'images')));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use("/users", routerUsers);

const PORT = process.env.PORT || 38001;
app.listen(PORT, () => {
  console.log(`servidor iniciado no endereco: ${PORT}`);
});

module.exports = app,corsOption;

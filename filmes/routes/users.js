var express = require('express');
var router = express.Router();

const UsersController = require('../controller/users-Controller');
const usersController = new UsersController();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', usersController.formLogin());
router.post('/login', usersController.login());

module.exports = router;

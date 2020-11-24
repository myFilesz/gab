var express = require('express');
var router = express.Router();

const FilmesController = require('../controller/filmes-controller');
const filmesController = new FilmesController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/filmes/listar',filmesController.listar());
router.get('/filmes/allmovies',filmesController.listAll());
router.get('/filmes/inserir',filmesController.formInserir());
router.post('/filmes/inserir',filmesController.inserir());

module.exports = router;

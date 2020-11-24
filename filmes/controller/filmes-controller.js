//FilmesDAO - importação da classe
const FilmesDAO = require('../dao/filmes-dao');
//filmesDAO - objeto da classe
const filmesDAO = new FilmesDAO();

class FilmesController{
    listar(){
        return function(req,res){
            const sessao = req.session;
            if(sessao.nome){
                filmesDAO.listar()
                .then(filmes => {
                    //res.status(200).send(filmes);
                    res.render('filmes/listar', {"filmes" : filmes})
                }).catch(erro => {
                    console.log(erro)
                })
            }
        }
    }//fim do listar()

    formInserir(){
        return function(req,res){
            res.render('filmes/form');
        }
    }//fim do formInserir()

    inserir(){
        return function(req,res){
            const sessao = req.session;
            if(sessao.nome){
                const filme = req.body;
                filmesDAO.inserir(filme)
                .then(() => {
                    req.flash('success',`Filme/série <strong>${filme.nome}</strong> cadastrado com sucesso`)
                    res.redirect('/filmes/listar');
                }).catch(erro => {
                    req.flash('error','Erro ao cadastrar o filme/série');
                    res.redirect('/filmes/inserir');
                })
            }
        }
    }//fecha o inserir

    listAll(){
        return function(req,res){
            const sessao = req.session;
            if(sessao.nome){
                filmesDAO.listAll()
                .then(filmes => {
                    res.render('filmes/allmovies', {"filmes" : filmes})
                }).catch(erro => {
                    console.log(erro)
                })
            }
        }//fecha o inserir
    }
}//fecha a classe

module.exports = FilmesController;
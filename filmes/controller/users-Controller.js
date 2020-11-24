//FilmesDAO - importação da classe
const UserDAO = require('../dao/users-dao');
//filmesDAO - objeto da classe
const userDAO = new UserDAO();

class UserController{
    formLogin(){
        return function(req,res){
            res.render('users/login');
        }
    }
    
    login(){
        return function(req,res){
            const email = req.body.email;
            const senha = req.body.senha;

            userDAO.logar(email,senha)
            .then( (usuario) => {
                if(usuario != ''){
                    req.session.userId = usuario[0].id;
                    req.session.nome = usuario[0].nome;
                    req.session.email = usuario[0].email;
                    res.redirect('/filmes/listar');
                }else{
                    req.flash('error','Usuário e/ou senha inválidos! Tente novamente.');
                    res.redirect('/users/login');
                }
            }).catch(erro => console.log(erro));

        };
    }//fim do método login

}//fecha a classe

module.exports = UserController;
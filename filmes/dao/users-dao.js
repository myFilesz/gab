//devemos importar as configurações do banco de dados realizadas
const database = require('./db');

class UserDAO{
   
    constructor(){
        this.db = database;
    }

   
    logar(email,senha){
        return new Promise((resolve,reject) => {
            this.db.query(
                "SELECT * FROM users WHERE email=? AND senha=?",
                [email,senha],
                (erro,usuario) => {
                    if(erro){
                        return reject("Houve um erro ao tentar encontrar o usuário: " + erro);
                    }
                    return resolve(usuario);
                }
            )
        });
    }//fim do metodo logar
}

module.exports = UserDAO;
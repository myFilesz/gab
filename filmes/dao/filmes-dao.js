const db = require('./db');

class FilmesDAO{
    constructor(){
        this.db = db;
    }

    listar(){
        return new Promise((resolve,reject) => {
            this.db.query(
                'SELECT * FROM filmes_e_series where fk_user=1 ORDER BY ano,nome;',
                [],
                (erro,filmes) => {
                    if(erro) return reject(erro);
                    return resolve(filmes);
                }
            )
        })
    }//fim do listar()

    inserir(filme){
        return new Promise((resolve,reject) => {
            this.db.query(
                'INSERT INTO filmes_e_series(nome,ano) VALUES(?,?);',
                [filme.nome, filme.ano],
                (erro) => {
                    if(erro) return reject(erro);
                    return resolve();
                }
            )
        })
    }//fim do inserir(filme)

    listAll(){
        return new Promise((resolve,reject) => {
            this.db.query(
                'SELECT * FROM filmes_e_series ORDER BY ano,nome;',
                [],
                (erro,filmes) => {
                    if(erro) return reject(erro);
                    return resolve(filmes);
                }
            )
        })
    }//fim do  listAll()
}

module.exports = FilmesDAO;
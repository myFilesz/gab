const db = require("./db");

class Products {
  constructor() {
    this.db = db;
  }

  registro() {
    return new Promise((resolve, reject) => {
      this.db.query(
        "INSERT INTO tb_usuarios (name,email,url) VALUES ?,?,?",
        [data.name, data.url, data.email],
        (err, response) => {
          if (err) throw console.log(err);
          console.log("TUDO OK !!");
          return resolve(response);
        }
      );
    });
  }
} //fim class Products

module.exports = Products;

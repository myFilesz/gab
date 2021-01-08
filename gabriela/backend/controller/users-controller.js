//models
const Users = require("../models/model-users");
const users = new Users();

class usersController {
  registro() {
    return function(req, res) {
      const data = req.body.data;
      users.registro(data).then(data => {
        return res.json(data);
      });
    };
  }
}

module.exports = usersController;

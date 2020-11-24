const jwt = require('jsonwebtoken');


class Token{

    create(id) {
        const token = jwt.sign({id : id,},'PRIVATEKEY'
        ,{
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60)
        }); 

        return token
    }   

    authorization(authorization) {

        const auth =  jwt.sign({auth : authorization}, 'PRIVATEKEY'
            ,{
                expiresIn:"1h"
            }
        );

        return auth
    }

}


module.exports = Token;
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY || 'jwtsecretkey'

class JwtHelper {
    encode(idUser: number) {
        return jwt.sign({idUser}, secret, {
            expiresIn: 86400,
        });
    }
}

export default new JwtHelper();
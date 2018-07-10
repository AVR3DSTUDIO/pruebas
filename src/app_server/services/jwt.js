'use strict'

var jwt = require('jsonwebtoken');
// var moment = require('moment');
var secret = 'clave_secreta_del_curso_de_angular4_avanzado';

exports.createToken = function(user) {
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        emal: user.email,
        role: user.role,
        image: user.image,
        iat: new Date().getTime(), //moment().unix(),
        exp: new Date().getTime() + 30 * 24 * 60 * 60 // moment().add(30, 'days').unix()
    }
    return jwt.encode(payload, secret);
}
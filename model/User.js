const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud: {
        type: String
    },
    sub: {
        type: String,
        require: true
    },
    email: {
        type: String
    },
    email_verified: {
        type: String
    },
    azp:{
        type: String
    },
    name: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti: {
        type: String
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User;
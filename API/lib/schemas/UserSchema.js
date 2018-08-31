const mongoose = require('mongoose');
const crypto = require('crypto');
const JWT = require('jsonwebtoken');

exports = module.exports = () => {
    UserSchema = new mongoose.Schema({
        firstName?: String,
        lastName?: String,
        nickName: String,
        email: String,
        hash: String,
        salt: String,
    })

    UserSchema.methods.setPassword = function (password) {
        this.salt = crypto.randomBytes(16).toString('hex');
        this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    }

    UserSchema.methods.validatePassword = function (password) { 
        const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
        return this.hash === hash;
    }

    UserSchema.methods.generateJWT = function(){
        const today = new Date();
        const expiration = new Date(today);

        expiration.setDate( today.getDate() + 60 );

        return JWT.sign({
            email: this.email,
            id: this._id,
            exp: parseInt(expiration.getTime() / 1000, 10)
        },'secret');
    }

    UserSchema.methods.toAuthJson = function(){
        return {
            _id: this._id,
            email: this.email,
            token: this.generateJWT()
        }
    }
    
    return UserSchema;
}

exports['@singleton'] = true;
const mongoose = require('mongoose');

exports = module.exports = (userSchema) => {

    let Model = mongoose.model('Data', userSchema);

    return {
        insertUser: async (userData) => {
            
        }
    }
}

exports['@singleton'] = true;
exports['@require'] = ['lib/schemas/UserSchema']
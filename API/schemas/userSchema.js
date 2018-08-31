const mongoose = require('mongoose');

const { Schema } = mongoose;

let UserSchema = new Schema({
    name: String,
    location: String
})

mongoose.model('Users', UserSchema);
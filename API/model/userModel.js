const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data', { useNewUrlParser: true })
mongoose.Promise = global.Promise;

let db = mongoose.connection

db.on('error', console.log.bind(console, 'Moongo encountered and error'))
    .once('open', console.log.bind(console, 'Mongo is Connected'));

const {Schema} = mongoose;

let UserSchema = new Schema({
    name: String,
    location: String
})

let User = mongoose.model('Users', UserSchema);

exports.insert = async (doc) => {
    let document;
    console.log(doc)
    let userModel = new User(doc);
    document = await userModel.save(doc);

    return document;
}

exports.getAll = async () => {
    let document;

    document = await User.find({})

    return document;
}
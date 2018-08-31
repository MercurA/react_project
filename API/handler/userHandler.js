let userModel =require('../model/userModel');

exports.insertUser = async(req, res) => {
    try {
        let document = await userModel.insert(req.body);

        res.send(document);
    } catch (error) {
        res.send(error);
    }
}

exports.getAll = async(req,res) => {
    try {
        let document = await userModel.getAll();

        res.send(document);
    } catch (error) {
        res.send(error);
    }
}
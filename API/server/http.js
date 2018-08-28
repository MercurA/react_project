const express = require('express');

exports = module.exports = (handler, settings) => {
    let app = express(),
        PORT = settings.http.port,
        HOST = settings.http.host;

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.post('/api/post', handler.postItem);
    app.get('/api/get', handler.getAll);
    app.delete('/api/delete/:id', handler.removeOne);
    app.put('/api/update/:id', handler.updateOne);


    return {
        start: () => {
            app.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }
}

exports['@singleton'] = true;
exports['@require'] = ['handlers/handler', 'lib/settings']
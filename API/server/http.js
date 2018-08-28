const express = require('express');

//We write all our functions withing this block of code
exports = module.exports = (handler, settings) => { //  <== 1. Here we inject them as shown with 'settings'.
    let app = express(),
        PORT = settings.http.port,
        HOST = settings.http.host;

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    //This is used if we get json objects through http
    app.use(express.json());
    //Decoding URL
    app.use(express.urlencoded({ extended: true }));

    //we call the GET methond from express that requires an endpont and
    // a callback but we can also implement a middleware between.
    app.post('/api/post', handler.postItem);
    app.get('/api/get', handler.getAll);
    app.delete('/api/delete/:id', handler.removeOne);
    app.put('/api/update/:id', handler.updateOne);


    //Here we return a function that starts to listen on port 3000 atm.
    return {
        start: () => {
            app.listen(PORT, () => console.log(`Server is up on ${HOST}:${PORT}`));
        }
    }
}

//we export it as a singleton
exports['@singleton'] = true;
//here we make out requers and and we injected in (1)
exports['@require'] = ['handlers/handler', 'lib/settings']
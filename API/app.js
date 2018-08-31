const express = require('express');

let userHandler = require('./handler/userHandler');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/post', userHandler.insertUser)
app.get('/get', userHandler.getAll)

app.listen(3000, ()=>console.log('Server is up.'))
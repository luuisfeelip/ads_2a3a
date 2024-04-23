//Fazer a importação do express
const express = require('express');
const router = require('./routes/index');


//configurações básicas dos app
const app = express();
app.use('/', router);

module.exports = app; //exportando o app, pos iremos importa-lo no servidor

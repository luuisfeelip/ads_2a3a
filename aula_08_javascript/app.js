//Fazer a importação do express
const express = require('express');

//rotas (quando o servidor for acesso, para onde ele vai??)
const router = express.Router();
router.get('/',(req,res) =>{
res.send('Olá turma de ADS SMP da manhã');
});

//configurações básicas dos app
const app = express();
app.use('/', router);

module.exports = app; //exportando o app, pos iremos importa-lo no servidor

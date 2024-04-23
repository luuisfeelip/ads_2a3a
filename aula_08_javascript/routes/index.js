//rotas (quando o servidor for acesso, para onde ele vai??)
const express = require('express');

const router = express.Router();
router.get('/',(req,res) =>{
res.send('Olá turma de ADS SMP da manhã');
});
module.exports=router;
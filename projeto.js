const express = require ('express')
const divisao = express ()
const bodyParser = require ('body-parser')
const port = 3000

divisao.use(bodyParser.urlencoded({extended: true}));
divisao.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message:'Está Funcionando'}));

//GET /aplicarDesconto
router.get('/aplicarDesconto/:valor', (req, res) => {
    const valor = parseInt(req.params.valor)
    //const desconto = parseInt(req.params.valor)
    res.json({valorDescontado:((valor * 30) /100)})
})

divisao.use('/', router)

if (require.main === module){
    //inicia o servidor 
    divisao.listen(port)
    console.log('Em funcionamento')
}

module.exports = divisao 
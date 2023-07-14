const express = require ('express')
const icms = express ()
const bodyParser = require ('body-parser')
const port = 3000

icms.use(bodyParser.urlencoded({extended: true}));
icms.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message:'Funcionando icms'}));

//GET /aplicarDesconto
router.get('/aplicaroicms/:valor', (req, res) => {
    const valoricms = parseInt(req.params.valor)
    //const desconto = parseInt(req.params.valor)
    res.json({valordoicms:((valoricms * 100) /12)})
})

icms.use('/', router)

if (require.main === module){
    //inicia o servidor 
    icms.listen(port)
    console.log('Funcionando')
}

module.exports = icms 
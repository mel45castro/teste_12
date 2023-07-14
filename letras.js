const express = require ('express')
const letra = express ()
const bodyParser = require ('body-parser')
const port = 3000

letra.use(bodyParser.urlencoded({extended: true}));
letra.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message:'ta funcionando'}));

//GET /aplicarDesconto
router.get('/validaraletraZ/:letra', (req, res) => {
    const texto = req.params.letra.toLowerCase()
    res.json ({funcletra: texto.substring(0,1)})
})

letra.use('/', router)

if (require.main === module){
    //inicia o servidor 
    letra.listen(port)
    console.log('funcionando')
}

module.exports = letra
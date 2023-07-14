const test = require('tape')
const supertest = require('supertest')
const letra = require('./letras')

test('teste_12 ', (t) => { 
    supertest(letra)
    .get('/validaraletraZ/z')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err,res) => {
        t.assert(res.body.funcletra === ('z') ,'Verificado a letra Z')
        t.end()
    })
})
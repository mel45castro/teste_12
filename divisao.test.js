const test = require('tape')
const supertest = require('supertest')
const divisao = require('./projeto')

test('teste_12 30-5', (t) => { 
    supertest(divisao)
    .get('/aplicarDesconto/100')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err,res) => {
        t.assert(res.body.valorDescontado === 30,'Resultado')
        t.end()
    })
})
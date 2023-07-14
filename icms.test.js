const test = require('tape')
const supertest = require('supertest')
const icms = require('./icms')

test('teste_12', (t) => { 
    supertest(icms)
    .get('/aplicaroicms/12')
    .expect('Content-Type',/json/)
    .expect(200)
    .end((err,res) => {
        t.assert(res.body.valorDescontado === 100,'Resultado')
        t.end()
    })
})
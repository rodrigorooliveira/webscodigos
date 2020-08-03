const porta = 3003

const express = require('express')
const app = express() 
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancodeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //Aqui vou obter o próprio parâmetro.
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Será convertido esse Objeto em um JSON
})

app.put('/produtos:/id', (req, res, next) => {
    const produto = bancoDeDados.SalvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})
    
app.listen(porta, () => {
     console.log(`Servidor  ESTÁ Exevutando na porta: ${porta}`)
})

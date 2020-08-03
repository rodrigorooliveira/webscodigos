const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function SalvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {} //vai procucar um id, senão encontrar vai retornar um objeto vazio.
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = {SalvarProduto,  getProduto, getProdutos}
const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15

}
/* quero pegar esse objeto e salvar ele no disco. E Também quero transformá-lo no formato Json
isto é numa String(textual) */

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { //teremos uma CallBack
  console.log(err || 'Arquivo Salvo!') //Caso no valor de err esteja nulo ele passa a outra opção
  // que é a mensagem "Arquivo Salvo!" e criar o arquivo no formato textual com o nome sugerido.

})
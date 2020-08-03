const fs = require('fs') /* Ele vai procurar primeiramente  nos módulos nativos do Nodes.js; 
se ele não encontra ele vai procurar na pasta NodeModules, o mais importante é que é um
módulo que já vem previamente instalado no Nodes.js */

const caminho = __dirname + '/arquivo.json' //variável para ler o caminho do arquivo

// Leitura de um arquivo de forma Sícrona
const conteudo = fs.readFileSync(caminho, 'utf-8') //ler um arquivo de forma síncrona
//(utf-8), para o tipo de fontes(unicode) para poder ser interpretado caracteres especiais.
console.log(conteudo)

// assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => { //aqui foi necessário chamar através de uma CallBack
const config = JSON.parse(conteudo)
console.log(`${config.db.host}: ${config.db.port}`)
})
//primeiro elemento da minha CallBack é um erro ((err, ...))
//segundo elemento da minha CallbBack é o contéudo ((conteudo))
//foi criado uma constante chamando (conteudo)
//para receber o conteúdo
/* só vai receber esse conteúdo se a var err estiver vazio, portanto é necessario 
testar primeiro se ela está vazio. */

// será que o conteúdo retornado será um objeto ou uma String?
//Reposta: vai retornar uma String

// O comando >> "console.log(`${config.db.host}: ${config.db.port}`)" só vai retornar se for um objeto
//caso contrário vai resultar num erro de código ao executar.
const config = require('./arquivo.json')
console.log(config.db)
fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteúdo da Pasta...')
    console.log(arquivos)
})
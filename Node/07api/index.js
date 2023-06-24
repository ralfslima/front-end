// Importar módulo Express
const express = require('express');

// App
const app = express();

// Body-parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// JSON
let dados = [];

// Código
let codigo = 1;

// Rota para listar todos os dados
app.get('/', function(req, res){
    res.json(dados);
    res.end();
});

// Rota pra retornar a quantidade de registros
app.get('/registros', function(req, res){

    res.status(200).json({'registros':dados.length});
    res.end();

});

// Rota para listar uma pessoa através do código
app.get('/:codigo', function(req, res){

    // Verificar a existência do código
    let posicao = dados.findIndex(objDados => {return objDados.codigo == req.params.codigo});

    // Retorno
    if(posicao == -1){
        res.status(404).json({'mensagem':'Não existe ninguém com esse código'});
    }else{
        res.status(200).json(dados[posicao]);
    }
    
    res.end();
});

// Rota para para cadastrar
app.post('/', function(req, res){

    if(req.body.nome == undefined || req.body.idade == undefined){
        res.status(400).json({'mensagem':'É necessário informar o nome e a idade'});
    }else{

        // Criar objeto
        let obj = {
            'codigo':codigo,
            'nome':req.body.nome,
            'idade':req.body.idade
        }

        // Cadastrar o obj no JSON dados
        dados.push(obj);

        // Incrementar o código
        codigo+=1;

        // Retorno
        res.status(201).json(obj);
        res.end();
    }
});

// Rota para alterar dados
app.put('/', function(req, res){

    // Verificar a existência do código
    let posicao = dados.findIndex(objDados => {return objDados.codigo == req.body.codigo});

    // Criar um novo objeto
    let novoObjeto = {
        'codigo':req.body.codigo,
        'nome':req.body.nome,
        'idade':req.body.idade
    };

    // Alterar o vetor/JSON
    dados[posicao] = novoObjeto;

    // Retorno
    res.status(200).json({'mensagem':'Dados alterados com sucesso!'});
    res.end();

});

// Rota para remover
app.delete('/:codigo', function(req, res){

    // Verificar a existência do código
    let posicao = dados.findIndex(objDados => {return objDados.codigo == req.params.codigo});

    // Remover registro
    dados.splice(posicao, 1);

    // Retorno
    res.status(200).json({'mensagem':'Registro removido com sucesso!'});
    res.end();

});



// Servidor
app.listen(8080);
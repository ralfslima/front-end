// Importar dependências
const express = require('express');
const jwt = require('jsonwebtoken');

// App
const app = express();

// Configurar o body-parser (transitar dados entre rotas)
app.use(express.json());

// Listar de usuários
let usuarios = [
    {'nome':'Ralf',    'senha':'123'},
    {'nome':'Larissa', 'senha':'456'},
    {'nome':'Jaison',   'senha':'abc'}
]

// Rotas
app.get('/', function(req, res){
    res.end('Hello World!');
});

app.post('/login', function(req, res){

    // Extrair nome e senha da requisição
    let nome = req.body.nome;
    let senha = req.body.senha;

    // Variável de validação de usuário
    let existe = false;

    // Índice
    let i = 0;

    // Laço de repetição
    for(i = 0; i<usuarios.length; i++){
        if(usuarios[i].nome === nome && usuarios[i].senha === senha){
            existe = true;
            break;
        }
    }

    // Caso o usuário seja validado
    if(existe){
        // Criar token
        let token = jwt.sign({'nome':usuarios[i].nome}, 'apex');

        // Retorno
        res.status(200).json({'token':token});
    }else{
        res.status(404).json({'mensagem':'Nome ou senha incorretos.'});
    }
});

app.get('/login', function(req, res){
    
    try{

        // Obter token via cabeçalho (Bearer)
        let token = req.headers.authorization.split(' ')[1];

        // Obter token
        //let token = req.params.token;

        // Verificar se o token é válido
        let obj = jwt.verify(token, 'apex');

        // Retorno
        res.status(200).json({'objeto':obj});

    }catch(erro){
        res.status(400).json({'mensagem':erro});
    }

});

// Servidor
app.listen(8080);
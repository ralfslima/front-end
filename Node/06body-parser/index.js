// Importar o módulo Express
const express = require('express');

// App
const app = express();

// Configurar o body-parser (transitar dados entre rotas)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Rota para exibir a página HTML
app.get('/', function(req, res){
    res.sendFile(__dirname + '/formulario.html');
});

// Rota para exibir o nome e a idade
app.post('/exibirDados', function(req, res){
    res.write('Nome: ' + req.body.nome);
    res.write(' - ');
    res.write('Idade: ' + req.body.idade);
    res.end();
});

// Servidor
app.listen(8080);

// Referenciar o módulo Express
const express = require('express');

// Referenciar o módulo Express-handlebars
const {engine} = require('express-handlebars');

// App
const app = express();

// Configurações Express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rotas
app.get('/', function(req, res){
    res.render('pagina1', {'nome':'Ralf', 'exibir':false});
});

app.get('/pg2', function(req, res){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(dados => dados.json())
    .then(dados_convertido => {
        res.render('pagina2', {'vetor':dados_convertido})
    })
});

// Servidor
app.listen(8080);
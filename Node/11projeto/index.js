// Importar o módulo Express
const express = require('express');

// Importar o módulo express-handlebars
const { engine } = require('express-handlebars');

// Importar o módulo path (responsável por gerenciar diretórios)
const path = require('path');

// Importar o módulo MySQL
const mysql = require('mysql2');

// Efetuar a conexão
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'node_mysql'
});

// Testar conexão
conexao.connect(function(erro){
    if(erro) throw erro;
    //console.log('Conexão efetuada');
});

// Criar um objeto para ter acesso as funcionalidades do Express
const app = express();

// Referências de diretórios (path)
app.use('/bootstrap_css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Configurar o body-parser (transitar dados entre rotas)
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Configurações do handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rotas
app.get('/', function(req, res){
    
    // SQL
    let sql = 'SELECT * FROM pessoas';

    // Executar o comando SQL
    conexao.query(sql, function(erro, retorno){

        // Condicional
        if(erro){
            res.redirect('/falhaListagem');
        }else{
            res.render('principal', {pessoas:retorno});
        }

    });


    // res.write('Hello World!');
    // res.end();
});

app.get('/:mensagem', function(req, res){

    // SQL
    let sql = 'SELECT * FROM pessoas';

    // Executar o comando SQL
    conexao.query(sql, function(erro, retorno){
        
        // Estrututa de escolha
        switch(req.params.mensagem){
            case 'okCadastro':
            res.render('principal', {'okCadastro':true, 'pessoas':retorno})
            break;

            case 'falhaCadastro':
            res.render('principal', {'falhaCadastro':true, 'pessoas':retorno})
            break;

            case 'falhaListagem':
            res.render('principal', {'falhaListagem':true, 'pessoas':retorno})
            break;

            case 'falhaRemocao':
            res.render('principal', {'falhaRemocao':true, 'pessoas':retorno})
            break;

            case 'okRemocao':
            res.render('principal', {'okRemocao':true, 'pessoas':retorno})
            break;
        }

    });
    
    

});


app.post('/cadastrar', function(req, res){

    // SQL
    let sql = `INSERT INTO pessoas (nome, idade) VALUES('${req.body.nome}', ${req.body.idade})`;

    // Executar comando SQL
    conexao.query(sql, function(erro, retorno){

        // Condicional
        if(erro){
            res.redirect('/falhaCadastro');
        }else{
            res.redirect('/okCadastro');
        }

    })
});

app.get('/remover/:codigo', function(req, res){
    
    // SQL
    let sql = `DELETE FROM pessoas WHERE codigo = ${req.params.codigo}`;

    // Executar o comando SQL
    conexao.query(sql, function(erro, retorno){

        // Condicional
        if(erro){
            res.redirect('/falhaRemocao')
        }else{
            res.redirect('/okRemocao')
        }

    });

});

// Servidor
app.listen(8080);
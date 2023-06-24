// Módulo http
const http = require('http');

// Criar um servidor
http.createServer(function(req, res){
    res.write('Utilizando Nodemon!');
    res.end();
}).listen(8080);

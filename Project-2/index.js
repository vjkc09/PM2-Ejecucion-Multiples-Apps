const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Aplicacion 2 + primera actualizacion')
});

server.listen(4000);
console.log('La magia ocurre en el puerto 4000!');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Aplicacion 1 + un cambio')
});

server.listen(3000);
console.log('La magia ocurre en el puerto 3000!');
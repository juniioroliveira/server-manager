const Socket = require('ws');

const WebSocket = new Socket.Server({ port: 8080 });
const Clients = new Set();

WebSocket.on('connection', function connection(ws, request) {
  const ip = request.url.split('?')[1].split('=')[1];
  console.log(`${ip} Conectou-se!`.green);

  Clients.add(ws);

  ws.on('message', function incoming(message) {
    console.log('Mensagem recebida: %s', message);
  });

  ws.send('Olá do servidor WebSocket!');

  ws.on('close', function close() {
    console.log('Conexão fechada.'.red);
    Clients.delete(ws);
  });
});

module.exports = { WebSocket, Clients };

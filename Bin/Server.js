const Service = require('node-windows').Service;

const svc = new Service({
  name: 'NomeDoServico',
  description: 'Descrição do Serviço',
  script: './Server.js'
});

svc.on('install', () => {
  svc.start();
});

svc.on('start', () => {
  console.log('Serviço iniciado.');
});

svc.install();

const Service = require('node-windows').Service;

const svc = new Service({
  name: 'Server Manager',
  description: 'Gerenciamento de processos do servidor',
  script: './Install.js'
});

svc.on('install', () => {
  console.log('Serviço instalado com sucesso.');
});

svc.install();
const Service = require('node-windows').Service;

const svc = new Service({
  name: 'Server Manager',
  description: 'Gerenciamento de processos do servidor',
  script: 'C:\\caminho\\para\\o\\seu\\arquivo.js'
});

svc.on('install', () => {
  svc.start();
});

svc.install();

const Initialize = require('../App');
const Service = require('node-windows').Service;
const color = require("colors");
const wss = require('./Websocket');

const svc = new Service({
  name: 'NomeDoServico',
  description: 'Descrição do Serviço',
  script: './Server.js'
});

svc.on('install', () => {
  console.log('Serviço iniciado em dev.');
  svc.start();
});

svc.on('start', () => {
  console.log('Serviço iniciado.');
});

svc.on('stop', () => {
  console.log('Serviço parado.');
});

svc.install();

console.log('Serviço iniciado.');

const websocket = wss;
 
Initialize();

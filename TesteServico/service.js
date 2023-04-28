const notifier = require('node-notifier');
const Service = require('node-windows').Service;
const fs = require('fs');

const logFilePath = 'C:\\Users\\junio\\DESENVOLVIMENTO\\REACTJS\\ChatGPT\\Server-Manager\\Bin\\log.txt'; // Caminho para o arquivo de log

const svc = new Service({
  name: 'Nome do seu serviço',
  description: 'Descrição do seu serviço',
  script: 'C:\\Users\\junio\\DESENVOLVIMENTO\\REACTJS\\ChatGPT\\Server-Manager\\Bin\\Server.js',
  credentials: {
    user: 'Administrador',
    password: 'admin'
  }
});

svc.on('install', () => {
//   svc.start();
});

svc.on('start', () => {
  console.log('O serviço foi iniciado.');

  // Grava uma mensagem de log no arquivo de log
  const logMessage = `O serviço foi iniciado em ${new Date().toISOString()}\n`;
  fs.appendFileSync(logFilePath, logMessage);

  // Envia uma notificação para a Central de Ações do Windows
  notifier.notify({
    title: 'Título da notificação',
    message: 'Mensagem da notificação',
    icon: 'Caminho para o ícone da notificação'
  });
});

svc.install();

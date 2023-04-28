const Service = require('node-windows').Service;
const fs = require('fs');

const svc = new Service({
  name: 'Drogaleste - Server Manager',
  description: 'Gerenciador de serviços e integrações',
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

  
});

svc.install();

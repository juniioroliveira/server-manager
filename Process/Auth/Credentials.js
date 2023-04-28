const cmd = require('node-cmd');

module.exports = {
  addCredential: function(server, username, password) {
    // Executa o comando "cmdkey" para adicionar uma nova credencial
    const command = `cmdkey /add:${server} /user:${username} /pass:${password}`;
    console.log(command);
    return new Promise((resolve, reject) => {
      cmd.run(command, (err, data, stderr) => {
        if (err) {
          reject(err);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          console.log(`Credencial adicionada com sucesso para o servidor ${server}`);
          resolve(`Credencial adicionada com sucesso para o servidor ${server}`);
        }
      });
    });
  }
};



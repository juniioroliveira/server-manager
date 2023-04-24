const fs = require('fs');
const path = require('path');

function Copy(source, targets) {

  // Verifica se o diretório de origem existe
  if (!fs.existsSync(source)) {
    console.error(`O diretório ${source} não existe`);
    return;
  }

  // Lê o diretório de origem
  const files = fs.readdirSync(source);

  // Inicializa o contador de arquivos copiados
  let completed = 0;

  // Percorre cada arquivo no diretório de origem
  for (const file of files) {
    const sourcePath = path.join(source, file);

    // Verifica se é um diretório
    if (fs.lstatSync(sourcePath).isDirectory()) {

      // Cria um array de diretórios de destino correspondentes
      const targetDirs = targets.map(target => path.join(target, file));

      // Chamada recursiva para copiar o diretório para cada destino
      Copy(sourcePath, targetDirs);

    } else {

      // Percorre cada diretório de destino
      for (const target of targets) {

        // Verifica se o diretório de destino existe
        if (!fs.existsSync(target)) {
          fs.mkdirSync(target, { recursive: true });
        }

        const targetPath = path.join(target, file);

        // Copia o arquivo para o diretório de destino
        fs.copyFileSync(sourcePath, targetPath);
        completed++;

        // Verifica se o arquivo foi copiado para todos os diretórios
        if (completed === targets.length) {

          // Exclui o arquivo da origem após copiar para o destino
          fs.unlinkSync(sourcePath);   
          
        }
      }
    }
  }
}

module.exports = Copy;

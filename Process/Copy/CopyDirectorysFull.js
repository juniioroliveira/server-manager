const fs = require('fs');
const path = require('path');
const { addCredential } = require('../Auth/Credentials');
const records = require('../../Robots/SyncFiles/AccesStage/Records');


function CopyDirectorysFull(props){
  try{
    const source = props?.directorys?.origin?.path;
    const destinations = props?.directorys?.destination;
    const targets = destinations ? destinations.map(obj => obj.path) : [];
  
    // Verifica se diretórios precisam de credenciais
    CheckCredentials(props?.directorys?.origin, destinations);
  
    Copy(source, targets, props?.action?.move, props?.name);
    

  }catch(err){
    console.log(`Erro na verificação de rotina: ${err}`)
  }
}


function Copy(source, targets, action, name) {

  if (!fs.existsSync(source)) {
    console.log(`O diretório ${source} não existe`.red);
    return;
  }

  const files = fs.readdirSync(source);
  if (files.length === 0) {
    console.log(`Nenhum arquivo disponível no diretório:`.yellow, source.gray);
    return;
  }

  // Filtra apenas os arquivos (exclui as pastas)
  const filesOnly = files.filter(file => {
    if(!fs.lstatSync(path.join(source, file)).isDirectory()){
      if(![file].includes(records)){
        records.setRecordsReceived(file)
      }
    }
  });


  for (const file of files) {
    const sourcePath = path.join(source, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      const targetDirs = targets.map(target => path.join(target, file));
      Copy(sourcePath, targetDirs, action);
    } else {
      let copiedToAll = true;

      for (const target of targets) {
        if (!fs.existsSync(target)) {
          console.log(`O diretório '${target.gray}' não existe, criando...`.yellow);
          fs.mkdirSync(target, { recursive: true });
        }

        const targetPath = path.join(target, file);

        console.log(`Copiando arquivo ${sourcePath.gray} para ${targetPath.gray}...`);
        fs.copyFileSync(sourcePath, targetPath);

        if (!fs.existsSync(targetPath)) {
          copiedToAll = false;
        }
      }

      if (copiedToAll && action) {
        console.log(`Arquivo ${sourcePath.gray} copiado para todos os diretórios, excluindo da origem...`);
        fs.unlinkSync(sourcePath);
      }
    }
  }

  // console.log(`Fim da cópia do diretório ${source.gray} para os diretórios: ${targetDirs.gray}`.green);
}

function CheckCredentials(origin, destinate){

  if(origin?.authenticate){
    // console.log(`Origem (${origin.path}) com autenticação obrigatória`)
    addCredential(origin?.credential?.server, origin?.credential?.user, origin?.credential?.password)
  }

  if(destinate)
  for (const target of destinate){
    // console.log('teste'.yellow, origin?.authenticate, target?.authenticate)
    if(target?.authenticate){
      // console.log(`Destino (${target.path}) com autenticação obrigatória`)
      addCredential(target?.credential?.server, target?.credential?.user, target?.credential?.password)

    }
  }
}

module.exports = { CopyDirectorysFull };
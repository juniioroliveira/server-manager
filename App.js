const Copy = require("./Process/Copy/CopyDirectorysFull");
const AccessStage = require('./Robots/SyncFiles/AccesStage/Handle');
const ItauSFG008Taina = require('./Robots/SyncFiles/Itau SFG/Remessa008 Taina/Handle');
const {connectToRemoteHost} = require("./Robots/RemoteAccess/RDPGenetate");
const fs = require('fs');

function App(){

    // Inicia a rotina AccessStage
    // AccessStage();

    // Inicia a rotina que coleta os arquivos REMESSA do produto 008 da maquina Taina
    ItauSFG008Taina();
    
    // Inicia a rotina para geração de arquivo RDP
    // connectToRemoteHost();

    
}

module.exports = App;
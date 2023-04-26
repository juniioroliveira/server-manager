const Copy = require("./Process/Copy/CopyDirectorysFull");
const AccessStage = require('./Robots/SyncFiles/AccesStage/Handle');
const {connectToRemoteHost} = require("./Robots/RemoteAccess/RDPGenetate");
// const { generateRdpFile } = require('./path/to/RDPGenerate.js');
const fs = require('fs');

function App(){

    // Inicia a rotina AccessStage
    AccessStage();
    
    // Inicia a rotina para geração de arquivo RDP
    // connectToRemoteHost();

    
}

module.exports = App;
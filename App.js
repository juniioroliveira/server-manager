const Copy = require("./Process/Copy/CopyDirectorysFull");
const AccessStage = require('./Robots/SyncFiles/AccesStage/Handle');

function App(){

    // Inicia a rotina AccessStage
    AccessStage();

    
}

module.exports = App;
const Copy = require("../../../Process/Copy/CopyDirectorysFull");
const Props = require("./Props");

function AccessStage(){

    Copy('C:\\Users\\junio\\OneDrive\\Área de Trabalho\\Nova pasta', ['C:\\Users\\junio\\OneDrive\\Área de Trabalho\\Copy1', 'C:\\Users\\junio\\OneDrive\\Área de Trabalho\\Copy2']);
    
}

module.exports = AccessStage;



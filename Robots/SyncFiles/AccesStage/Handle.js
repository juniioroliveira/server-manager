const { CopyDirectorysFull } = require("../../../Process/Copy/CopyDirectorysFull");
const { Props } = require("./Props");
const Notify = require('./Notify');


async function Initialize(){    
    
    Notify();
    setInterval(AccessStage, 10000);
}

async function AccessStage(){
    
    CopyDirectorysFull(Props);
}

module.exports = Initialize;



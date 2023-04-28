const { WebSocket, Clients } = require("../../../Bin/Websocket");
const records = require("./Records");

let recordsCache = [];
function Initialize(){
    
    // setInterval(notify, (60000 * 10));
    setInterval(notify, 10000);
    
}

function notify(){
    

    if(JSON.stringify(recordsCache) !== JSON.stringify(records.getRecordsReceivedValues())){
        recordsCache = records.getRecordsReceivedValues();

        if (parseInt(records.getRecordsReceivedCount()) > 0) {
            const message = `${records.getRecordsReceivedCount()} arquivos foram recebidos`;
            console.log(message.cyan);
        
            const notify = {
                            title: 'Itaú SFG - Server Manager',
                            message: `${records.getRecordsReceivedCount()} arquivos foram recebidos`,                
                        }    
        
            for (const client of Clients) {
              client.send(`${JSON.stringify(notify)}`);
            }
        }
    }
}

module.exports = Initialize;
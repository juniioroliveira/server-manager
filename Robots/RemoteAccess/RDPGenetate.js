const { RDPFile } = require('node-rdpjs');

function connectToRemoteHost() {
    const rdp =  RDPFile({
      hostname: 'remotehost',
      username: 'remoteuser',
      password: 'remotepassword'
    })
  .setProgramPath('C:\\Windows\\System32\\notepad.exe')
  .setScreenSize(1024, 768)
  .setColors(32)
  .setFullScreen(true)
  .build();
  
  rdp.connect();
}

module.exports = { connectToRemoteHost };

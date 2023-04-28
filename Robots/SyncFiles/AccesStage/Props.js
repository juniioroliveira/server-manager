 
const Props = {
    name: 'AccessStage',
    general: {
        alterName: false
    },
    connection: {
        type: 'LOCAL'   
    },
    directorys: {
        origin:{
            authenticate: true,
            credential: {
                server: '192.168.1.26',
                user: 'junior',
                password: '#Droga@leste@suporte_$'
            },
            path: '\\\\192.168.1.26\\SFG - ITAU\\DLESTEXXX\\Backup\\REMESSA\\PROD'
        },
        destination: [
            {
                authenticate: false,
                path: 'C:\\Users\\junio\\OneDrive\\Área de Trabalho\\BackupRobo'
            },

        ]
    },
    action: {
        move: false
    },
    notify: {
        email: ['',],
        phone: ['',]
    }
}

module.exports = { Props };
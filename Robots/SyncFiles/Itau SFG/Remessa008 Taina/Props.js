 
const Props = {
    name: 'Itau SFG 008',
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
                server: 'Escr55',
                user: 'DROGALESTE',
                password: '873562'
            },
            path: '\\\\Escr55\\edi\\RETORNO_CNAB\\DLESTEXXX\\REMESSA\\PROD\\008'
        },
        destination: [
            {
                authenticate: false,
                path: 'C:\\Users\\junio\\OneDrive\\Área de Trabalho\\Backup'
            },
            {
                authenticate: true,
                path: '\\\\192.168.1.26\\SFG - ITAU\\DLESTEXXX\\REMESSA\\PROD\\008',
                credential: {
                    server: '192.168.1.26',
                    user: 'JUNIOR',
                    password: '#Droga@leste@suporte_$'
                },
            },

        ]
    },
    action: {
        move: true
    },
    notify: {
        email: ['',],
        phone: ['',]
    }
}

module.exports = { Props };
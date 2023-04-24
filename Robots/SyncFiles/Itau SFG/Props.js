const Props = {
    general: {
        alterName: false
    },
    connection: {
        type: 'LOCAL',
        authenticateOrigin: false,
        authenticateDestination: false       
    },
    credentials: {
        origin: {
            user: '',
            password: ''
        },
        destination: {
            user: '',
            password: ''
        }
    },
    directorys: {
        origin:{
            path: '../TesteCopy/Origem'
        },
        destination: {
            path: ['../TesteCopy/Destino',]
        },
        backup: {
            path: '../TesteCopy/Backup'
        }
    },
    action: {
        move: false
    },
    notify: {
        email: ['',],
        phone: ['',]
    }
}

module.exports = Props;
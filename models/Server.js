const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();
        
        // Rutas
        this.routes();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Directorio público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.usuariosPath, require('../routes/Usuario') );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Escuchando servidor en el puerto', this.port);
        });
    }

}

module.exports = Server;
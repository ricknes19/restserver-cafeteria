const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();
        
        // Rutas
        this.routes();
    }

    middlewares(){
        // Directorio público
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Hola mundo')
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Escuchando servidor en el puerto', this.port);
        });
    }

}

module.exports = Server;
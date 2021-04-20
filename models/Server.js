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
            res.json({
               msg: 'GET'
            });
        });
        
        this.app.post('/api', (req, res) => {
            res.json({
               msg: 'POST'
            });
        });
        
        this.app.put('/api', (req, res) => {
            res.json({
               msg: 'PUT'
            });
        });
        
        this.app.patch('/api', (req, res) => {
            res.json({
               msg: 'PATCH'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
               msg: 'DELETE'
            });
        });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Escuchando servidor en el puerto', this.port);
        });
    }

}

module.exports = Server;
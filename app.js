require('dotenv').config();

const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hola mundo')
});
 
app.listen(process.env.PORT, () => {
    console.log('Escuchando servidor en el puerto', process.env.PORT);
});
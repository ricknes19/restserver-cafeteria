const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    
    // Parámetros query
    const { q, nombre = "No hay nombre", apikey, page = 1, limit} = req.query;

    res.json({
       msg: 'GET - controlador',
       q,
       nombre,
       apikey,
       page,
       limit
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
       msg: 'POST - controlador',
       nombre,
       edad
    });
}

const usuariosPut = (req = request, res = response) => {
    
    // Parámetro de segmento
    const { id } = req.params;

    res.json({
       msg: 'PUT - controlador',
       id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
       msg: 'PATCH - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
       msg: 'DELETE - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}


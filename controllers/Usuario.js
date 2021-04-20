const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
       msg: 'GET - controlador'
    });
}

const usuariosPost = (req, res = response) => {
    res.status(201).json({
       msg: 'POST - controlador'
    });
}

const usuariosPut = (req, res = response) => {
    res.json({
       msg: 'PUT - controlador'
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

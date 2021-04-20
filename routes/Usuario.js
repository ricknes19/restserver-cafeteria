const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
       msg: 'GET'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
       msg: 'POST'
    });
});

router.put('/', (req, res) => {
    res.json({
       msg: 'PUT'
    });
});

router.patch('/', (req, res) => {
    res.json({
       msg: 'PATCH'
    });
});

router.delete('/', (req, res) => {
    res.json({
       msg: 'DELETE'
    });
});

module.exports = router;
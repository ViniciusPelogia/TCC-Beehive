const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');

const router = Router();

router
    .get('/usuarios', UsuarioController.pegaUsuarios)
    .get('/usuarios/:id')
    .post('/usuarios', UsuarioController.cadastrarUsuario)
    .put('/usuarios/:id')
    .delete('/usuarios/:id')

module.exports = router;
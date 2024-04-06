const { Router } = require('express');
import { UsuarioController } from '../controllers/usuarioController.js';

const router = Router();

router
    .get('/usuarios', UsuarioController.pegaUsuarios)
    .get('/usuarios/:id')
    .post('/usuarios')
    .put('/usuarios/:id')
    .delete('/usuarios/:id')

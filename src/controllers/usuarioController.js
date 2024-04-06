const UsuarioService = require('../services/usuarioService.js');

const usuarioService = new UsuarioService();

class UsuarioController{

    static async pegaUsuarios(req, res){
        try {
            
            const buscaUsuarios = await usuarioService.pegaUsuarios()

            res.status(200).json(buscaUsuarios)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async cadastrarUsuario(req, res){

        const { nome, email, senha, idade} = req.body;

        try {
            const usuario = await usuarioService.cadastrarUsuario({ nome, email, senha, idade })

            res.status(201).json(usuario)
        } catch (error) {
            res.status(401).json({messagee: error.message})
        }

    }

}

module.exports = UsuarioController;
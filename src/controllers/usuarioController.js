import { UsuarioService } from '../services/usuarioService.js';

const usuarioService = new UsuarioService();

class UsuarioController{

    static async pegaUsuarios(req, res){
        try {
            
            const buscaUsuarios = usuarioService.pegaUsuarios()

            res.status(200).json(buscaUsuarios)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

}

export { UsuarioController };
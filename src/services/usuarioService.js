import { database } from '../database/models';

class UsuarioService{

    async pegaUsuarios(){

        const usuarios = database.Usuarios.findAll({})

    }

}

export { UsuarioService };
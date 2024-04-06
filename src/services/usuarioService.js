const database = require('../database/models');
const { hash } = require('bcryptjs');

class UsuarioService{

    async pegaUsuarios(){

        const usuarios = await database.usuarios.findAll({})

        return usuarios

    }

    async cadastrarUsuario(dto){

        const usuario = await database.usuarios.findOne({
            where:{
                id: dto.email
            }
        })

        if(usuario){
            throw new Error('Usuário já cadastrado /usuarioService.js')
        }

        try {
            
            const senhaHash = await hash(dto.senha, 8)

            const novoUsuario = await database.usuarios.create({
                nome: dto.nome,
                email: dto.email,
                senha: senhaHash,
                idade: dto.idade
            })

            return novoUsuario

        } catch (error) {
            throw new Error('Error ao cadastrar novo usuário /usuarioService.js ')
        }
    }
}

module.exports = UsuarioService;
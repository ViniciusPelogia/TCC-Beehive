const bodyParser = require('body-parser')

const usuario = require('../routes/usuarioRoute.js')

module.exports = app =>{
    app.use(
        bodyParser.json(),
        usuario
    )
}
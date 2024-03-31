import express from "express";
import conectaNoBanco from "./config/db/configDB.js";

//Conexão com Banco de Dados
const conexao = await conectaNoBanco()

conexao.on("error", (erro) =>{
    console.error("erro de conexão", erro)
})

conexao.once("open", ()=>{
    console.log("Conexao com o banco feito com sucesso")
})

const app = express();

export default app;
// Importando o Express
//const express = require("express")
import express from "express";
//Importando as rotas do ClienteController (onde estão as rotas)
//ClienteController
import ClienteController from "./controllers/ClienteController.js"
//ProdutoController
import ProdutoController from "./controllers/ProdutoController.js"
//PedidoController
import PedidoController from "./controllers/PedidoController.js"
//Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js"

//Realizando a conexão com o banco de dados
connection.authenticate().then(() =>{
    console.log("Conexão com o banco de dados realizada com sucesso!")
}).catch((erro) =>{
    console.error("Erro ao conectar com o banco de dados:", erro)
})
//Criando o banco de dados (somente se ainda não existir)
connection.query("CREATE DATABASE IF NOT EXISTS SistemaLoja;").then(() =>{
    console.log("Banco de dados criado");
}).catch((erro) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${erro}`)
});
// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
//Configurando o Express para aceitar dados vindo de formulários
app.use(express.urlencoded({extended: true}))

// Ativando o uso das rotas
app.use("/", ClienteController)
app.use("/", ProdutoController)
app.use("/", PedidoController)
// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})





// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})
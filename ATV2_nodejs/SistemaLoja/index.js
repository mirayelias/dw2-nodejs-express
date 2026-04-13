// Importando o Express
//const express = require("express")
import express from "express";
//Importando as rotas dos game controllers (onde estão as rotas)
import PersonagemController from "./controllers/PersonagemController.js"
import ItemController from "./controllers/ItemController.js"
import RecordeController from "./controllers/RecordeController.js"
// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Ativando o uso das rotas
app.use("/", PersonagemController)
app.use("/", ItemController)
app.use("/", RecordeController)
// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

app.get("/personagem", function(req,res){
    res.render("personagem")
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
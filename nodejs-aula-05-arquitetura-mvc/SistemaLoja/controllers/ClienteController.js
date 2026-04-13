//Forma de importar CommonJS (antiga)
// const express = require("express")

//Importando o Express com ES6 Modules (nova)
import express from "express"
//Método do eExpress usado para criar as rotas da aplicação
const router = express.Router()

// ROTA CLIENTES
router.get("/clientes",function(req,res){
    const clientes = [
        {nome: "Ana Silva", tempoZerado: "00:42:17", data: "12/04/2026"},
        {nome: "Pedro Almeida", tempoZerado: "00:55:09", data: "11/04/2026"},
        {nome: "Marina Oliveira", tempoZerado: "01:08:22", data: "10/04/2026"},
        {nome: "Rafael Santos", tempoZerado: "00:38:04", data: "09/04/2026"}
    ]
    res.render("clientes", {
        clientes : clientes
    })
})
// Exportando Módulo para usé-lo em outros arquivos
export default router
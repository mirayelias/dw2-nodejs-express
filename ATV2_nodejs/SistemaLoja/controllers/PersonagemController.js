//Forma de importar CommonJS (antiga)
// const express = require("express")

//Importando o Express com ES6 Modules (nova)
import express from "express"
//Método do eExpress usado para criar as rotas da aplicação
const router = express.Router()

// ROTA PERSONAGENS
router.get("/personagens",function(req,res){
    const personagens = [
        {nome: "Levi, the Cursed Chosen", descricao: "O escolhido amaldiçoado, um guerreiro cuja maldição é sua arma."},
        {nome: "Serapha, Weaver of Sins", descricao: "A Tecelã de Pecados, uma bruxa que manipula culpa e sofrimento."},
        {nome: "Vorgath, the Profaned Flame", descricao: "O dragão de Vorgath, a Chama Profanada que consome tudo em fogo abissal."}
    ]
    res.render("personagens", {
        personagens : personagens
    })
})

// Exportando Módulo para usé-lo em outros arquivos
export default router
import express from "express";
const router = express.Router()


// ROTA PRODUTOS
router.get("/produtos",function(req,res){
    const produtos = [
        {nome: "Brinco de Sombras", preco: 0, categoria: "Artefato Escondido"},
        {nome: "Mapa da Fortaleza Oculta", preco: 0, categoria: "Pergaminho Secreto"},
        {nome: "Chave da Cripta", preco: 0, categoria: "Item Raro"},
        {nome: "Poção da Visão", preco: 0, categoria: "Suprimento Místico"}
    ]
    res.render("produtos", {
        produtos: produtos
    })

})

export default router;
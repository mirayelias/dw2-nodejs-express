import express from "express";
const router = express.Router()


// ROTA ITENS
router.get("/itens",function(req,res){
    const itens = [
        {nome: "Lâmina Profana", preco: 1200, categoria: "Arma"},
        {nome: "Manto das Sombras", preco: 900, categoria: "Armadura"},
        {nome: "Amuleto da Ruína", preco: 3200, categoria: "Acessório"},
        {nome: "Pergaminho de Tormenta", preco: 150, categoria: "Consumível"}
    ]
    res.render("itens", {
        itens: itens
    })

})

export default router;
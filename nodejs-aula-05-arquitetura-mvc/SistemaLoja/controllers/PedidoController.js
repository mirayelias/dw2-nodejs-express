import express from "express";
const router = express.Router()


// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "Ana Silva", valor: 12450},
        {numero: "Pedro Almeida", valor: 11020},
        {numero: "Marina Oliveira", valor: 9800},
        {numero: "Rafael Santos", valor: 8700}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

export default router;
import express from "express";
const router = express.Router()


// ROTA RECORDES
router.get("/recordes",function(req,res){
    const recordes = [
        {nome: "Lucas Silva", tempo: "02:14:32"},
        {nome: "Mariana Costa", tempo: "02:30:07"},
        {nome: "Henrique Alves", tempo: "02:49:18"}
    ]
    res.render("recordes", {
        recordes: recordes
    })
})

export default router;
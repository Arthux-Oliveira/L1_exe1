const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("pages/index",{"retorno":null,"valores":{"idade":""}});
});


router.post("/classificar", (req, res)=>{

    //recuperar a idade do nadador
    let idade = parseInt(req.body.idade);

    //manipular os dados -> classificar
    if(idade >= 5 && idade <=7 ){
        var categoria = "Infantil A";
    }else if(idade >= 8 && idade <=10 ){
        var categoria = "Infantil B";
    }else if(idade >= 11 && idade <=13 ){
        var categoria = "Juvenil A";
    }else if(idade >= 14 && idade <=17 ){
        var categoria = "Juvenil B";
    }else if(idade >=18 ){
        var categoria = "Senior";
    }else{
        var categoria = "Idade não classificada";
    }

    //formatação 
    let objJson = {"categoria":categoria};

    //envio dos dados para mescalr com o HTML
    res.render("pages/index",{"retorno":objJson,"valores":{"idade":req.body.idade}})

});


module.exports = router;
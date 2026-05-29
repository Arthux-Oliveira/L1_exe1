const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/", (req, res) => {

    res.render("pages/index", { "retorno": null, "valores": { "idade": "" }, "erros": null });
});

router.post("/classificar",

    body("idade")
        .notEmpty().withMessage("A idade é obrigatória!")
        .isInt({ min: 5, max: 120 }).withMessage("Insira uma idade válida entre 5 e 120 anos"),
    
    (req, res) => {

        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
 
            return res.render("pages/index", {
                "retorno": null,
                "valores": req.body,
                "erros": errors.array()
            });
        }


        let idade = parseInt(req.body.idade);
        let categoria = "";

        if (idade >= 5 && idade <= 7) {
            categoria = "Infantil A";
        } else if (idade >= 8 && idade <= 10) {
            categoria = "Infantil B";
        } else if (idade >= 11 && idade <= 13) {
            categoria = "Juvenil A";
        } else if (idade >= 14 && idade <= 17) {
            categoria = "Juvenil B";
        } else if (idade >= 18) {
            categoria = "Senior";
        } else {
            categoria = "Idade não classificada";
        }

        let objJson = { "categoria": categoria };

        res.render("pages/index", {
            "retorno": objJson,
            "valores": req.body,
            "erros": null
        });
    }
);

module.exports = router;
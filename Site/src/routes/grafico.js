var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

// rota do grafico idade
router.get("/idade/", function (req, res) {
    graficoController.idade(req, res);
})

router.get("/curtidas/", function (req, res) {
    graficoController.curtidas(req, res);
})

router.get("/conhecimento/", function (req, res) {
    graficoController.conhecimento(req, res);
});

module.exports = router;
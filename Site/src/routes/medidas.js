var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal1(req, res);
})

// rotas das curtidas
router.post("/curtir/", function (req, res) {
    medidaController.curtir(req, res);
})
router.delete("/descurtir/:fkUsuario/:fkPostagem", function (req, res) {
    medidaController.descurtir(req, res);
})
router.get("/exibir_usuario_curtida/:idUsuario", function (req, res) {
    medidaController.exibir_usuario_curtida(req, res);
})

module.exports = router;
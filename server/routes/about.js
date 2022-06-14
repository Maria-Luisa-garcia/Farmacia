// Importar Express
var express = require("express");
// Importamos el enrutador de express
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  // render manda a renderizar (generar y entregar)

  res.render(
    "about",
    // Este es el View-Model
    {
      name: "Ivan Rivalcoba",
      email: "jorge.rr@gamadero.tecnm.mx",
      url: "www.itgam.com/rivalcoba"
    }
  );
});

module.exports = router;
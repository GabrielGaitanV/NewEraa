const express = require("express");
const router = express.Router();

//requiero el controlador
const indexController = require ("../controllers/indexController.js");

//Rutas de las vistas
router.get("/",indexController.index)

router.get("/us",indexController.us)

router.get("/contact",indexController.contact)

//exporto la ruta
module.exports = router;
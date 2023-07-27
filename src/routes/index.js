const express = require("express");
const routerCountry = require("./country.router");
const routerCity = require("./city.router");
const routerCountry1 = require("./country1.router");
const routerUser = require("./user.router");
const routerContinent = require("./continent.router");
const router = express.Router();

// colocar las rutas aquí

router.use("/countries", routerCountry);
router.use("/cities", routerCity);
router.use("/countries1", routerCountry1);
router.use("/user", routerUser);
router.use("/continents", routerContinent);

module.exports = router;

const { getAll, create, getOne, remove, update } = require('../controllers/country1.controllers');
const express = require('express');

const routerCountry1 = express.Router();

routerCountry1.route('/')
    .get(getAll)
    .post(create);

routerCountry1.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerCountry1;
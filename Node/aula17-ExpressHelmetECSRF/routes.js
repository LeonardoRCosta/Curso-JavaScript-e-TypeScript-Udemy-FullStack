const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.fazPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;

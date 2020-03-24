const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentsController = require('./controllers/IncidentController');

const routes = express.Router();

/**
 * Query Param: Filtros, paginação
 * Routes Params: Parâmetros pra identificar recursos, geralmente usado ara único recurso
 * Body - Corpo da req, criar ou alterar
 */

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentsController.create);

module.exports = routes;

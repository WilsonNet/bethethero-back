const express = require('express');

const routes = express.Router();

/**
 * Query Param: Filtros, paginação
 * Routes Params: Parâmetros pra identificar recursos, geralmente usado ara único recurso
 * Body - Corpo da req, criar ou alterar
 */

routes.post('/users/', (request, response) => {
  const params = request.body;
  return response.json({ osi: params });
});

module.exports = routes;

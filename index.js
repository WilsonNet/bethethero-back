const express = require('express');

const app = express();

app.use(express.json());

/**
 * Query Param: Filtros, paginação
 * Routes Params: Parâmetros pra identificar recursos, geralmente usado ara único recurso
 * Body - Corpo da req, criar ou alterar
 */
app.post('/users/', (request, response) => {
  const params = request.body;
  return response.json({ oi: params });
});

app.listen(3333);

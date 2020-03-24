const express = require('express');

const app = express();
app.get('/', (request, response) => {
  return response.json({ oi: 'hahhaha' });
});

app.listen(3333);

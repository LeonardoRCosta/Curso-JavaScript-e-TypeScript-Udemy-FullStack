const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
  console.log('Acesse http://localhost:3000');
});

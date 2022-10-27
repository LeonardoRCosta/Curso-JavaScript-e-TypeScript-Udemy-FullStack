const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // Acessa os arquivos estáticos

app.set('views', path.resolve(__dirname, 'src', 'views')); // Define o caminho das views
app.set('view engine', 'ejs');

app.use(routes);


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
  console.log('Acesse http://localhost:3000');
});

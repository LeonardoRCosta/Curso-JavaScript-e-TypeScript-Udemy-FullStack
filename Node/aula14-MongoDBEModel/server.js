require('dotenv').config();
const express = require('express');
const app = express();
mongoose = require('mongoose');

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log('Conectado ao MongoDB!');
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // Acessa os arquivos estáticos

app.set('views', path.resolve(__dirname, 'src', 'views')); // Define o caminho das views
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal); // utiliza o middleware global
app.use(routes);

app.on('Conectado', () => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
    console.log('Acesse http://localhost:3000');
  });
});

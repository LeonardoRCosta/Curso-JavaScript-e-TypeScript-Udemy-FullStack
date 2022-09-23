const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do Cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000!');
  console.log('Acesse http://localhost:3000');
});

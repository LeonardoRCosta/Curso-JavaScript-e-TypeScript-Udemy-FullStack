exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Este é o <span style="color:red">titulo</span>',
    numeros: [0, 1, 2, 3, 4, 5],
  });
  return;
};

exports.fazPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.cliente}`);
  return;
};

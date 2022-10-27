exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.fazPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.nome}`);
};

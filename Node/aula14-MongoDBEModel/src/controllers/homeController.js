exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.fazPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.cliente}`);
  return;
};

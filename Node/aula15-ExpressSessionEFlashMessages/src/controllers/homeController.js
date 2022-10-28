exports.paginaInicial = (req, res) => {
  console.log(req.flash('info'), req.flash('error'), req.flash('success'));
  res.render('index');
  return;
};

exports.fazPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.cliente}`);
  return;
};

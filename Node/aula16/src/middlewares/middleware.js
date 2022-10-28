// Exportando middleware global
exports.middlewareGlobal = (req, res, next) => {
  // res.locals é um objeto que pode ser acessado em qualquer view
  res.locals.umaVariavelLocal = 'Este é o valor da variável local';
  next();
};

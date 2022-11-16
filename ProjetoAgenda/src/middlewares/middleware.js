// Exportando middleware global
exports.middlewareGlobal = (req, res, next) => {
  // res.locals é um objeto que pode ser acessado em qualquer view
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render('404');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

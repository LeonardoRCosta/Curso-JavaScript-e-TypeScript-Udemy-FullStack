exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
};

exports.fazPost = (req, res) => {
  res.send(`O que você me enviou foi: ${req.body.nome}`);
};

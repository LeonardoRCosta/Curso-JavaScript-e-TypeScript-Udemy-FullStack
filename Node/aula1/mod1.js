const nome = 'Leonardo';
const sobrenome = 'Ramos';

const sayName = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.sayName = sayName;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.sayName = sayName;
this.qualquerCoisa = 'O que eu quiser exportar';


const nome = 'Leonardo';
const sobrenome = 'Ramos';
const idade = 18;

function soma(x, y) {
  return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade, soma };

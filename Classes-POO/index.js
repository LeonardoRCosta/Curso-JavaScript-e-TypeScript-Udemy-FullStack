// Os métodos criados dentro de classes já são automáticamente linkados ao prototype.
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando.`);
  }
}

const p1 = new Pessoa('João', 'Silva');
const p2 = new Pessoa('Maria', 'Santos');
const p3 = new Pessoa('Pedro', 'Santos');
// Mesmo após ter feito 3 instâncias, todas usam os métodos criados no pai, 
// ou seja, o método falar() por exemplo, é instânciado apenas 1 vez.
p1.falar();
p2.falar();
p3.falar();
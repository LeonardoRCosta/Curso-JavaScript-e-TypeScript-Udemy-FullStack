function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo o método aumento
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const produto = new Produto("Gen", 50);
const camiseta = new Camiseta("Camiseta", 100, "Azul");
const caneca = new Caneca("Caneca", 50, "Plástico", 10);
// A engine do JS vai buscar o método aumento dentro do objeto camiseta, se não encontrar,
// vai buscar no seu protótipo
caneca.estoque = 100;
console.log(caneca.estoque);
console.log(produto);
camiseta.aumento(100);
console.log(camiseta);
console.log(caneca);

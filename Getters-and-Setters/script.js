const _velocidade = Symbol('velocidade'); // Symbol é um tipo de dado especial que não pode ser acessado diretamente e nunca se repete.
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}
// c1.velocidade = 1500; // Nesse caso devemos deixar a velocidade como sendo um atributo privado.
// getter
console.log(c1.velocidade);
// setter
c1.velocidade = 67;
console.log(c1);
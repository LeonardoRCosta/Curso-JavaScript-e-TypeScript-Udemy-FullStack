class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // métodos de instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    // método estático
    static trocaPilha() {
        console.log('A pilha foi trocada!');
    }
}

const controle1 = new ControleRemoto('Philips');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha(); // O método estático é chamado diretamente pelo nome da classe, ou seja, não precisa de uma instância para ser chamado.
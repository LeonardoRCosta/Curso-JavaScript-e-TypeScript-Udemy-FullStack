// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D/g, '')
        })
    }

    isSequence() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequence()) return false;
        this.geraCPF();
        return this.novoCPF === this.cpfLimpo;
    }
}

const validaCPF = new ValidaCPF('070.987.720-03');
if (validaCPF.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}

// Obs: Uma dica para saber se um método pode ou não ser estático é verificar se ele possui a palavra this.
// Se não possuí-la, então deve ser estático.
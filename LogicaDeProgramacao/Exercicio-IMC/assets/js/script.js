function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);
    return Number(imc.toFixed(2));
}

function defineClassificacao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function validaCampos() {
    const peso = Number(document.querySelector("#pesoId").value);
    const altura = Number(document.querySelector("#alturaId").value);
    const resultado = document.querySelector("#resultado");
    
    if (peso == "" || altura == "" || isNaN(peso) || isNaN(altura)) {
        resultado.innerHTML = `<p>Peso e/ou Altura inválidos</p>`;
        resultado.classList.add("invalid");
    } else {
        const imc = calculaIMC(peso, altura);
        const classificacao = defineClassificacao(imc);
        resultado.innerHTML = `<p>Seu IMC é ${imc} (${classificacao})</p>`;
        resultado.classList.add("valid");
    }
}
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
});
function meuEscopo() {
  const form = document.querySelector(".form");
  const result = document.querySelector(".result");

  const pessoas = [];

  function recebeEventoForm(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    
    const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    }
    pessoas.push(pessoa);
    result.innerHTML += `<p>Nome: ${pessoa.nome} Sobrenome: ${pessoa.sobrenome} Peso: ${pessoa.peso} Altura: ${pessoa.altura}</p>`;
    console.log(pessoas);
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();

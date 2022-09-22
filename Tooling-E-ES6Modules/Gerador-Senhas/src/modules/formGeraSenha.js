import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chckMaiusculas = document.querySelector('.chck-maiusculas');
const chckMinusculas = document.querySelector('.chck-minusculas');
const chckNumeros = document.querySelector('.chck-numeros');
const chckSimbolos = document.querySelector('.chck-simbolos');
const btnGerar = document.querySelector('.btn-gerar');

export default () => {
  btnGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtdCaracteres.value,
    chckMaiusculas.checked,
    chckMinusculas.checked,
    chckNumeros.checked,
    chckSimbolos.checked
  );
  return senha || 'Nada selecionado';
}

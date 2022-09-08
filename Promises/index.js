function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function esperaAi(msg, tempo) {
  // resolve = sucesso, reject = erro
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('BAD VALUE'); // reject retorna uma mensagem de erro para o catch
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + ' Passei na promise'); // resolve recebe um parâmetro único
    }, tempo);
  });
}

// Promise.all()  Promise.race()  Promise.resolve()  Promise.reject()
const promises = [
  // 'Primeiro valor',
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 5000),
  esperaAi('Promise 3', 1000),
  // esperaAi(1000, 1000),
  // 'Outro valor'
];

// Promise.all(promises) // Promise.all() executa todas as promises e retorna um array com os resultados
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     });

// Promise.race(promises) // Promise.race() sempre retorna o valor da primeira promise a ser executada
//     .then(function(valor) {
//         console.log(valor);
//     })
//     .catch(function(erro) {
//         console.log(erro);
//     })

function baixaPagina() {
  const emCache = true;
  if (emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 4000);
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('Erro', e));

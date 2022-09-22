function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('Terminamos na fase:', fase);
//   })
//   .catch(e => console.log(e));

async function executa() {
  try {
    const fase1 = esperaAi('Fase 1', rand());
    console.log(fase1);

    setTimeout(function() {
      console.log('Essa promise estava pendente', fase1);
    }, 1000);

    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);

    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);

    console.log('Terminamos na fase:', fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();

/* 
  Estados de uma promise:
  pending: pendente -> quando a promise ainda não foi resolvida ou rejeitada, ou seja, seu estado inicial;
  fulfilled: resolvida -> quando a promise foi resolvida com sucesso;
  rejected: rejeitada -> quando a promise foi rejeitada por algum motivo.
*/
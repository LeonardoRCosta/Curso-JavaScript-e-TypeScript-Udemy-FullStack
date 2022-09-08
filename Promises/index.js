function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function esperaAi(msg, tempo) {
                    // resolve = sucesso, reject = erro 
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE'); // reject retorna uma mensagem de erro para o catch
        setTimeout(() => {
            resolve(msg); // resolve recebe um parâmetro único
        }, tempo);
    })     
}
esperaAi('Conexão com o BD', rand(1, 3))
    // .then é o que vai acontecer quando a promise for resolvida, ou seja, quando o resolve for chamado
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados do BD', rand(1, 3));
    }) 
    .then(resposta => {
        console.log(resposta);
        return esperaAi(12478932, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibindo dados na tela');
    })
    .catch(e => {
        console.log('ERRO:', e);
    });


const paragraphs = document.querySelector('.paragraphs');
const ps = paragraphs.querySelectorAll('p');

//essa constante recebe todos os estilos computados pelo navegador no css do body
const bodyStyles = getComputedStyle(document.body);
const backgroundColorBody = bodyStyles.backgroundColor;

function changeBackgroundColor(nodeList, color) {
    nodeList.forEach(p => {
        p.style.backgroundColor = color;
    });
}
document.addEventListener('onload', changeBackgroundColor(ps, backgroundColorBody));

for (let p of ps) {
    p.style.color = '#ffffff';
}


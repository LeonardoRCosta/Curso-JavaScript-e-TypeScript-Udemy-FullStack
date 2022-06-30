const data = new Date();
const diaSemanaNum = data.getDay();
const dia = data.getDate();
const mesNum = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minuto = data.getMinutes();

function getStringDayOfWeek(diaSemanaNum) {
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
  return diasSemana[diaSemanaNum];
}

function getStringMonth(mesNum) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[mesNum];
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

const showDate = document.querySelector("#show-date");
showDate.innerHTML = `${getStringDayOfWeek(diaSemanaNum)}, ${addZero(dia)} de ${getStringMonth(mesNum)} de ${ano}<br>
${addZero(hora)}:${addZero(minuto)}`;

// const h1 = document.querySelector("h1");
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString("pt-BR", { dateStyle: "full", timeStyle: "short" });

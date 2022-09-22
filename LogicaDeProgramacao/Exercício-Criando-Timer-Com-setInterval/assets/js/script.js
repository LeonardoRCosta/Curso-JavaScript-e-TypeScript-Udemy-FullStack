function clock() {
  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  let seconds = 0;
  let timer;

  function startClock() {
    timer = setInterval(function () {
      seconds++;
      relogio.innerHTML = getTimeFromSeconds(seconds);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      startClock();
    }

    if (element.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }

    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      seconds = 0;
    }
  });
}
clock();

function Calculator() {
  this.display = document.querySelector(".display");
  this.clearBtn = document.querySelector(".btn-clear");

  this.inicialize = () => {
    this.getClick();
    this.pressEnter();
  };
  this.pressEnter = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.calculate();
      }
    });
  };
  this.pressBackspace = () => {
    this.display.addEventListener("keyup", (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        this.eraseLastDigit();
      }
    });
  };
  this.clearDisplay = () => this.display.value = "";
  this.eraseLastDigit = () => this.display.value = this.display.value.slice(0, -1);
  this.calculate = () => {
    let expression = this.display.value;
    try {
      expression = eval(expression);
      if (!expression) {
        alert("Conta inválida");
        return;
      }
      this.display.value = String(expression);
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
  this.getClick = () => {
    document.addEventListener("click", (e) => {
      const element = e.target;

      if (element.classList.contains("btn-num")) this.addNumDisplay(element);
      if (element.classList.contains("btn-clear")) this.clearDisplay();
      if (element.classList.contains("btn-del")) this.eraseLastDigit();
      if (element.classList.contains("btn-eq")) this.calculate();
    });
  };
  this.addNumDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };
}
const calculator = new Calculator();
calculator.inicialize();

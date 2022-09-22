function createCalculator() {
    return{
        display: document.querySelector('.display'),
        clearBtn: document.querySelector('.btn-clear'),
        
        inicialize: function() {
            this.buttonsClick();
            this.pressEnter();
        },

        pressEnter () {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.calculate();
                }
            });
        },

        pressBackspace () {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.eraseLastDigit();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },
        
        eraseLastDigit() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let expression = this.display.value;

            try {
                expression = eval(expression);

                if (!expression) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(expression);
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        buttonsClick() {
            document.addEventListener('click', (e) => {
                const element = e.target;

                if (element.classList.contains('btn-num')) {
                    this.btnToDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (element.classList.contains('btn-del')) {
                    this.eraseLastDigit();
                }

                if (element.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },
        btnToDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();
calculator.inicialize();
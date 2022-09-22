class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validInputs = this.areInputsValid();
    const validPasswords = this.arePasswordsValid();

    if (validInputs && validPasswords) {
      alert("Formulário enviado com sucesso!");
      this.formulario.submit();
    }
  }

  arePasswordsValid() {
    let valid = true;

    const password = this.formulario.querySelector(".senha");
    const repeatPassword = this.formulario.querySelector(".repeteSenha");

    if (password.value !== repeatPassword.value) {
        this.createError(password, "Campos senha e repetir senha precisam ser iguais");
        this.createError(repeatPassword, "Campos senha e repetir senha precisam ser iguais");
        valid = false;
    }

    if (password.value.length < 6 || password.value.length > 12) {
        this.createError(password, "Senha precisa estar entre 6 e 12 caracteres");
        valid = false;
    }


    return valid;
  }

  areInputsValid() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let input of this.formulario.querySelectorAll(".validar")) {
      const label = input.previousElementSibling.innerText; // elemento irmão anterior <label>
      if (!input.value) {
        this.createError(input, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (input.classList.contains("cpf")) {
        if (!this.validateCPF(input)) valid = false;
      }

      if (input.classList.contains("usuario")) {
        if (!this.validateUser(input)) valid = false;
      }
    }
    return valid;
  }

  validateCPF(input) {
    const cpf = new ValidaCPF(input.value);

    if (!cpf.valida()) {
      this.createError(input, "CPF inválido");
      return false;
    } else {
      return true;
    }
  }

  validateUser(input) {
    const usuario = input.value;
    let valid = true;
    if (usuario.length > 12 || usuario.length < 3) {
      this.createError(input, "Usuário deve ter entre 3 e 12 caracteres");
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        input,
        "Nome de usuário precisa conter apenas letras e/ou números"
      );
      valid = false;
    }

    return valid;
  }

  createError(input, msg) {
    const errorDiv = document.createElement("div");
    errorDiv.innerHTML = msg;
    errorDiv.classList.add("error-text");
    input.insertAdjacentElement("afterend", errorDiv);
  }
}

valida = new ValidaFormulario();

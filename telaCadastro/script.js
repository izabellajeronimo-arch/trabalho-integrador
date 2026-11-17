  const senha = document.getElementById("senha");
  const confirma = document.getElementById("confirmr");

  function validarSenha() {
    if (senha.value !== confirma.value) {
      confirma.setCustomValidity("As senhas não iguais!");
    } else {
      confirma.setCustomValidity("");
    }
  }

  senha.onchange = validarSenha;
  confirma.onkeyup = validarSenha;
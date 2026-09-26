function obterMensagemErro(campo) {
  if (campo.validity.valueMissing) return "Este campo é obrigatório.";
  if (campo.validity.typeMismatch) return "Formato inválido.";
  if (campo.validity.patternMismatch) return campo.title || "Formato inválido.";
  if (campo.validity.tooShort) return `Mínimo de ${campo.minLength} caracteres.`;
  return "Valor inválido.";
}

function validarFormularioCadastro(form) {
  const campos = form.querySelectorAll("input, select, textarea");
  const erros = [];

  campos.forEach((campo) => {
    campo.classList.remove("campo-valido", "campo-invalido");

    if (!campo.checkValidity()) {
      campo.classList.add("campo-invalido");
      const label = form.querySelector(`label[for="${campo.id}"]`);
      const nomeCampo = label ? label.textContent.replace("*", "").trim() : campo.name;
      erros.push(`${nomeCampo}: ${obterMensagemErro(campo)}`);
    } else if (campo.value) {
      campo.classList.add("campo-valido");
    }
  });

  return erros;
}
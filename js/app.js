document.addEventListener("submit", function (e) {
  if (e.target.id !== "form-cadastro") return;
  e.preventDefault();

  const form = e.target;
  const feedback = document.getElementById("feedback-form");
  const erros = validarFormularioCadastro(form);

  if (erros.length > 0) {
    feedback.className = "feedback erro";
    feedback.innerHTML = "Corrija os campos abaixo:<br>" + erros.join("<br>");
    return;
  }

  salvarVoluntario(form);

  feedback.className = "feedback sucesso";
  feedback.textContent = "Cadastro realizado com sucesso! Obrigado por se voluntariar.";
  form.reset();
  form.querySelectorAll(".campo-valido").forEach((c) => c.classList.remove("campo-valido"));
  restaurarListaVoluntarios();
});

document.addEventListener("conteudoAtualizado", function (e) {
  if (e.detail.rota === "/cadastro") {
    restaurarListaVoluntarios();
  }
});
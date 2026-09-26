function salvarVoluntario(form) {
  const dados = {
    nome: form.nome.value,
    email: form.email.value,
    cpf: form.cpf.value,
    nascimento: form.nascimento.value,
    telefone: form.telefone.value,
    cep: form.cep.value,
    endereco: form.endereco.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
    projeto: form.projeto.value,
    motivacao: form.motivacao.value,
    dataCadastro: new Date().toISOString()
  };

  const voluntarios = JSON.parse(localStorage.getItem("voluntarios") || "[]");
  voluntarios.push(dados);
  localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
}
function obterVoluntarios() {
  return JSON.parse(localStorage.getItem("voluntarios") || "[]");
}

function restaurarListaVoluntarios() {
  const lista = document.getElementById("lista-voluntarios");
  if (!lista) return;

  const voluntarios = obterVoluntarios();

  if (voluntarios.length === 0) {
    lista.innerHTML = "<p>Nenhum voluntário cadastrado ainda.</p>";
    return;
  }

  lista.innerHTML =
    `<h3>Voluntários já cadastrados (${voluntarios.length})</h3><ul>` +
    voluntarios.map((v) => `<li>${v.nome} — ${v.projeto}</li>`).join("") +
    "</ul>";
}
const rotas = {
  "/": paginaInicio,
  "/projetos": paginaProjetos,
  "/cadastro": paginaCadastro,
};

function navegar() {
  const caminho = location.hash.replace("#", "") || "/";
  const pagina = rotas[caminho] || paginaInicio;
  document.querySelector("main").innerHTML = pagina();
  document.dispatchEvent(new CustomEvent("conteudoAtualizado", { detail: { rota: caminho } }));
}

window.addEventListener("hashchange", navegar);
window.addEventListener("DOMContentLoaded", navegar);
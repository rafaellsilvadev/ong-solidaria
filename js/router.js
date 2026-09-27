const rotas = {
  "/": paginaInicio,
  "/projetos": paginaProjetos,
  "/cadastro": paginaCadastro,
};

const titulos = {
  "/": "ONG Mãos Unidas | Início",
  "/projetos": "ONG Mãos Unidas | Projetos",
  "/cadastro": "ONG Mãos Unidas | Cadastro",
};

function navegar() {
  const caminho = location.hash.replace("#", "") || "/";
  const pagina = rotas[caminho] || paginaInicio;
  const main = document.querySelector("main");

  main.innerHTML = pagina();
  document.title = titulos[caminho] || titulos["/"];

  main.setAttribute("tabindex", "-1");
  main.focus();

  document.dispatchEvent(new CustomEvent("conteudoAtualizado", { detail: { rota: caminho } }));
}

window.addEventListener("hashchange", navegar);
window.addEventListener("DOMContentLoaded", navegar);
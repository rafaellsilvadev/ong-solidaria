"""
Script de build para producao do site ONG Solidaria.
Gera a pasta dist/ com CSS minificado, JS agrupado (bundle) e HTML atualizado.
"""
import re
import shutil
from pathlib import Path

BASE = Path(__file__).parent
DIST = BASE / "dist"

ORDEM_JS = ["templates.js", "masks.js", "validacao.js", "storage.js", "app.js", "router.js"]
PAGINAS = ["index.html", "cadastro.html", "projetos.html"]


def limpar_dist():
    if DIST.exists():
        shutil.rmtree(DIST)
    (DIST / "css").mkdir(parents=True)
    (DIST / "js").mkdir(parents=True)
    (DIST / "html").mkdir(parents=True)


def minificar_css(origem: Path, destino: Path):
    texto = origem.read_text(encoding="utf-8")
    texto = re.sub(r"/\*.*?\*/", "", texto, flags=re.DOTALL)
    texto = re.sub(r"\s+", " ", texto)
    texto = re.sub(r"\s*([{}:;,])\s*", r"\1", texto)
    destino.write_text(texto.strip(), encoding="utf-8")


def gerar_bundle_js(arquivos, destino: Path):
    partes = []
    for caminho in arquivos:
        conteudo = caminho.read_text(encoding="utf-8")
        linhas = [linha.strip() for linha in conteudo.splitlines() if linha.strip()]
        partes.append("\n".join(linhas))
    destino.write_text("\n".join(partes), encoding="utf-8")


def gerar_html(origem: Path, destino: Path):
    texto = origem.read_text(encoding="utf-8")
    texto = texto.replace('href="../css/styles.css"', 'href="../css/styles.min.css"')
    for nome in ORDEM_JS:
        texto = texto.replace(f'<script src="../js/{nome}"></script>\n', "")
    texto = texto.replace(
        '<script src="https://cdn.jsdelivr.net/npm/imask@7/dist/imask.min.js"></script>\n',
        '<script src="https://cdn.jsdelivr.net/npm/imask@7/dist/imask.min.js"></script>\n'
        '<script src="../js/bundle.min.js"></script>\n',
    )
    destino.write_text(texto, encoding="utf-8")


def main():
    limpar_dist()

    minificar_css(BASE / "css/styles.css", DIST / "css/styles.min.css")

    arquivos_js = [BASE / "js" / nome for nome in ORDEM_JS]
    gerar_bundle_js(arquivos_js, DIST / "js/bundle.min.js")

    for pagina in PAGINAS:
        gerar_html(BASE / "html" / pagina, DIST / "html" / pagina)

    shutil.copytree(BASE / "imagens", DIST / "imagens")

    tamanho_original = (BASE / "css/styles.css").stat().st_size + sum(f.stat().st_size for f in arquivos_js)
    tamanho_novo = (DIST / "css/styles.min.css").stat().st_size + (DIST / "js/bundle.min.js").stat().st_size
    reducao = 100 - (tamanho_novo / tamanho_original * 100)

    print("Build concluido em dist/")
    print(f"Tamanho original (CSS+JS): {tamanho_original} bytes")
    print(f"Tamanho apos build: {tamanho_novo} bytes")
    print(f"Reducao: {reducao:.1f}%")
    print(f"Requisicoes JS: de {len(ORDEM_JS)} arquivos para 1 (bundle.min.js)")


if __name__ == "__main__":
    main()

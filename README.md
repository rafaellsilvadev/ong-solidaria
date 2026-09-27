# ONG Mãos Unidas

Site institucional em formato de SPA (Single Page Application) para a ONG Mãos Unidas, desenvolvido como projeto acadêmico com HTML5 semântico, CSS responsivo e JavaScript puro (sem frameworks).

**Site publicado:** https://rafaellsilvadev.github.io/ong-solidaria/html/index.html

## Estrutura do projeto

- html/index.html : ponto de entrada / página inicial
- html/projetos.html : projetos e formas de participação
- html/cadastro.html : formulário de voluntariado
- css/styles.css : estilos globais
- js/router.js : roteamento por hash (SPA)
- js/templates.js : templates HTML de cada "página"
- js/masks.js : máscaras de CPF, telefone e CEP
- js/validacao.js : validação do formulário de cadastro
- js/storage.js : persistência dos voluntários via localStorage
- js/app.js : ligação entre formulário, validação e storage
- imagens/ : assets em SVG, PNG, JPG e WebP
- build.py : script de build (gera a pasta dist/)
- dist/ : saída do build (gerada, não versionada)

## Instalação

Não há dependências externas nem passo de instalação obrigatório — é um projeto client-side puro.

1. Clone o repositório:

git clone https://github.com/rafaellsilvadev/ong-solidaria.git
cd ong-solidaria

2. Abra html/index.html diretamente no navegador, ou sirva a pasta com um servidor local (ex: extensão "Live Server" do VS Code, ou o servidor embutido do PyCharm).

Requisito opcional: Python 3 instalado, apenas para rodar o script de build (build.py).

## Uso

- Navegue pelo menu superior entre Início, Projetos e Seja voluntário — a troca de conteúdo acontece via JavaScript (roteamento por hash #/rota), sem recarregar a página.
- Na página Seja voluntário, preencha o formulário de cadastro. Os campos de CPF, telefone e CEP têm máscara automática, e o formulário valida os dados antes de enviar.
- Os dados enviados são salvos no localStorage do navegador (não há back-end) e listados abaixo do formulário.

## Build e otimização

O script build.py gera uma versão de produção otimizada dentro da pasta dist/:
- Minifica o CSS (remove comentários e espaços)
- Agrupa os 6 arquivos JavaScript em um único bundle.min.js (reduz requisições HTTP)

Para rodar:

python3 build.py

## Acessibilidade (WCAG 2.1)

- Skip link para pular a navegação repetida (2.4.1)
- Atualização do título da página e movimentação de foco ao trocar de rota (2.4.2 / 2.4.3)
- Contraste de cores validado (mínimo 4.5:1 para texto normal, critério 1.4.3)
- Respeito à preferência prefers-reduced-motion do sistema (2.3.3)
- alt em imagens, label associado a todos os campos, fieldset/legend, hierarquia de títulos e navegação semântica

## Fluxo de desenvolvimento (Git/GitHub)

O projeto segue uma adaptação do GitFlow:
- main: versão estável, em produção (publicada via GitHub Pages)
- develop: branch de integração das funcionalidades
- feature/*: uma branch por funcionalidade, criada a partir de develop, integrada de volta via Pull Request

Para contribuir com uma nova funcionalidade:

git checkout develop
git pull origin develop
git checkout -b feature/nome-da-funcionalidade
(fazer os commits)
git push -u origin feature/nome-da-funcionalidade
(abrir PR no GitHub, com base em "develop")

## Manutenção

- Novas "páginas" da SPA: adicionar uma função em js/templates.js, registrar a rota em js/router.js (objetos rotas e titulos).
- Alterações de estilo: editar css/styles.css. Rodar python3 build.py depois, para atualizar a versão minificada.
- Deploy: automático via GitHub Pages a cada push na branch main (a promoção de develop para main é manual, via merge, representando uma "release").

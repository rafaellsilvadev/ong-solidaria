function paginaInicio() {
  return `
    <section class="hero" aria-labelledby="titulo-home">
      <picture>
        <source srcset="../imagens/heroi-home.webp" type="image/webp">
        <img src="../imagens/heroi-home.jpg" alt="Ilustração de voluntários da ONG Mãos Unidas em uma ação social." width="1600" height="900">
      </picture>
      <div class="hero-content">
        <h1 id="titulo-home">Solidariedade que transforma vidas</h1>
        <p>Conheça nossos projetos e participe de ações que fortalecem comunidades.</p>
        <a class="btn" href="#/projetos">Conheça nossos projetos</a>
      </div>
    </section>
    <section id="apresentacao" class="container">
      <h2>Sobre a ONG Mãos Unidas</h2>
      <p>A ONG Mãos Unidas atua no desenvolvimento de comunidades em situação de vulnerabilidade social, promovendo segurança alimentar, educação inclusiva e capacitação profissional.</p>
    </section>
  `;
}

function paginaProjetos() {
  return `
    <section class="hero-small" aria-labelledby="titulo-projetos">
      <h1 id="titulo-projetos">Projetos Sociais</h1>
      <p>Conheça nossas iniciativas e descubra como contribuir.</p>
    </section>

    <section id="projetos-ativos" class="container" aria-labelledby="titulo-ativos">
      <h2 id="titulo-ativos">Vitrine de Projetos Sociais</h2>
      <div class="cards">
        <article class="card-projeto">
          <figure>
            <picture>
              <source srcset="../imagens/projeto-nutrir.webp" type="image/webp">
              <img src="../imagens/projeto-nutrir.jpg" alt="Voluntários da ONG organizando cestas de alimentos para famílias em situação de vulnerabilidade." width="1200" height="800" loading="lazy">
            </picture>
            <figcaption>Projeto Nutrir e Acolher.</figcaption>
          </figure>
          <h3>Projeto Nutrir e Acolher</h3>
          <p>Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.</p>
          <a class="btn" href="#/cadastro">Quero participar</a>
        </article>

        <article class="card-projeto">
          <h3>Projeto Educação do Amanhã</h3>
          <p>Apoio educacional, oficinas e atividades de inclusão para crianças e jovens.</p>
          <a class="btn" href="#/cadastro">Quero participar</a>
        </article>
      </div>
    </section>

    <section id="voluntariado" class="container" aria-labelledby="titulo-voluntariado">
      <h2 id="titulo-voluntariado">Programa de Voluntariado</h2>
      <ul>
        <li>Apoio em ações de campo.</li>
        <li>Organização de campanhas e doações.</li>
        <li>Atividades de educação e capacitação.</li>
      </ul>
    </section>

    <section id="como-doar" class="container" aria-labelledby="titulo-doar">
      <h2 id="titulo-doar">Como Doar</h2>
      <div class="cards">
        <article><h3>Pix</h3><p>Use a chave institucional informada pela ONG.</p></article>
        <article><h3>Doação recorrente</h3><p>Contribua mensalmente para manter as ações sociais.</p></article>
        <article><h3>Transferência</h3><p>Solicite os dados bancários pelos canais oficiais.</p></article>
      </div>
    </section>

    <aside class="cta container">
      <h2>Faça parte dessa transformação</h2>
      <p>Cadastre-se como voluntário e escolha uma área de atuação.</p>
      <a class="btn" href="#/cadastro">Fazer cadastro</a>
    </aside>
  `;
}

function paginaCadastro() {
  return `
    <section aria-labelledby="titulo-cadastro">
      <h1 id="titulo-cadastro">Cadastro de Voluntário</h1>
      <p>Preencha os dados abaixo para demonstrar seu interesse em participar das ações.</p>
    </section>

    <form action="#" method="post" id="form-cadastro" novalidate>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div class="campo">
          <label for="nome">Nome Completo *</label>
          <input type="text" id="nome" name="nome" required minlength="3" autocomplete="name" placeholder="Ex.: Maria Silva">
        </div>
        <div class="campo">
          <label for="email">E-mail *</label>
          <input type="email" id="email" name="email" required autocomplete="email" placeholder="seuemail@exemplo.com">
        </div>
        <div class="campo">
          <label for="cpf">CPF *</label>
          <input type="text" id="cpf" name="cpf" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Digite um CPF no formato 000.000.000-00" maxlength="14" inputmode="numeric" placeholder="000.000.000-00">
        </div>
        <div class="campo">
          <label for="nascimento">Data de Nascimento *</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </div>
        <div class="campo">
          <label for="telefone">Telefone / WhatsApp *</label>
          <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" title="Digite o telefone no formato (00) 00000-0000" maxlength="15" inputmode="tel" placeholder="(11) 99999-9999">
        </div>
      </fieldset>

      <fieldset>
        <legend>Endereço e Localização</legend>
        <div class="campo">
          <label for="cep">CEP *</label>
          <input type="text" id="cep" name="cep" required pattern="\\d{5}-\\d{3}" title="Digite o CEP no formato 00000-000" maxlength="9" inputmode="numeric" placeholder="00000-000">
        </div>
        <div class="campo">
          <label for="endereco">Logradouro / Rua *</label>
          <input type="text" id="endereco" name="endereco" required placeholder="Ex.: Av. Paulista, 1000">
        </div>
        <div class="campo">
          <label for="cidade">Cidade *</label>
          <input type="text" id="cidade" name="cidade" required placeholder="Ex.: São Paulo">
        </div>
        <div class="campo">
          <label for="estado">Estado (UF) *</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione...</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="BA">Bahia</option>
            <option value="PR">Paraná</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Área de Atuação e Interesse</legend>
        <div class="campo">
          <label for="projeto">Projeto de Preferência *</label>
          <select id="projeto" name="projeto" required>
            <option value="">Selecione uma opção...</option>
            <option value="nutrir">Projeto Nutrir e Acolher</option>
            <option value="educacao">Projeto Educação do Amanhã</option>
            <option value="qualquer">Onde houver maior necessidade</option>
          </select>
        </div>
        <div class="campo">
          <label for="motivacao">Por que você quer ser voluntário? (Opcional)</label>
          <textarea id="motivacao" name="motivacao" rows="5" placeholder="Conte brevemente o que te inspira a ajudar..."></textarea>
        </div>
      </fieldset>
      <button type="submit" class="btn">Concluir Cadastro</button>
      <p id="feedback-form" role="status"></p>
    </form>

    <div id="lista-voluntarios" class="container"></div>
  `;
}

      

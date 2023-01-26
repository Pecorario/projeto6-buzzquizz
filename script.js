const carregarPaginaLista = () => {
  const body = document.querySelector('body');

  body.innerHTML = `
    <header>
      <h1>BuzzQuizz</h1>
    </header>

    <div class="container-conteudos">
      <div class="titulo-adicionar-quizz">
          <p>Seus Quizzes</p>
          <ion-icon name="add-outline" onclick="carregarPaginaQuizz()">
      </div>

      <div class="quizzes-adicionados">
          <div class="quizzadd1" onclick="carregarPerguntas()">
              <p>O quão Potterhead é você?</p>
          </div>
          <div class="quizzadd2">
              <p>É ex-BBB ou ex-De férias com o Ex?</p>
          </div>
      </div>
      <div class="criar-quizz esconder">
          <p>Você não criou nenhum </br>quizz ainda :(</p>
          <button onclick="carregarPaginaQuizz()">Criar Quizz</button>
      </div>
      <div class="titulo-opcoes-quizz">Todos os Quizzes</div>
      <div class="opcoes-quizz">
          <div class="quizz1">
              <p>Acerte os personagens corretos </br>dos Simpsons e prove seu amor!</p>
          </div>
          <div class="quizz2">
              <p>O quanto você é de boas?</p>
          </div>
          <div class="quizz1">
              <p>Acerte os personagens corretos </br>dos Simpsons e prove seu amor!</p>
          </div>
          <div class="quizz1">
              <p>Acerte os personagens corretos </br>dos Simpsons e prove seu amor!</p>
          </div>
          <div class="quizz2">
              <p>O quanto você é de boas?</p>
          </div>
          <div class="quizz1">
              <p>Acerte os personagens corretos </br>dos Simpsons e prove seu amor!</p>
          </div>
      </div>
    </div>
  `;
};

const carregarPaginaQuizz = () => {
  const body = document.querySelector('body');

  body.innerHTML = `
    <header>
      <h1>BuzzQuizz</h1>
    </header>

    <main class="c-main">
      <form action="" class="c-main__formulario">
        <fieldset class="c-main__informacoes-gerais">
          <legend>Comece pelo começo</legend>

          <div class="c-informacoes-gerais__content">
            <input
              type="text"
              minlength="20"
              maxlength="65"
              placeholder="Título do seu quizz"
              id="c-informacoes-gerais__input--titulo"
            />
            <input
              type="url"
              placeholder="URL da imagem do seu quizz"
              id="c-informacoes-gerais__input--url"
            />
            <input
              type="number"
              min="3"
              placeholder="Quantidade de perguntas do quizz"
              id="c-informacoes-gerais__input--quantidadePerguntas"
            />
            <input
              type="number"
              min="2"
              placeholder="Quantidade de níveis do quizz"
              id="c-informacoes-gerais__input--title"
            />
          </div>

          <div class="c-main__formulario-button">
            <button class="c-main__button-prosseguir">
              Prosseguir para criar perguntas
            </button>
          </div>
        </fieldset>
    </main>
  `;
};

carregarPaginaLista();

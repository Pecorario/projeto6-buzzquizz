let etapa = 1;
let quantidadePerguntas = 0;
let quantidadeNiveis = 0;
let novoQuizz;

const esconderBlocos = itemIdx => {
  const blocos = document.querySelectorAll('.c-main__content');

  blocos.forEach((item, index) => {
    const linhas = item.querySelectorAll('.c-main__line');
    const titulos = item.querySelectorAll('h2');

    if (index !== itemIdx) {
      item.classList.add('com-icone');
      item.querySelector('.c-content__icon').classList.remove('esconder');
      item.classList.add('c-main__content--hover');

      linhas.forEach(linha => {
        linha.classList.add('esconder');
      });

      titulos.forEach((titulo, idx) => {
        if (idx > 0) {
          titulo.classList.add('esconder');
        }
      });
    } else {
      item.classList.remove('com-icone');
      item.querySelector('.c-content__icon').classList.add('esconder');
      item.classList.remove('c-main__content--hover');

      linhas.forEach(linha => {
        linha.classList.remove('esconder');
      });

      titulos.forEach(titulo => {
        titulo.classList.remove('esconder');
      });
    }
  });
};

const carregarEtapaDois = () => {
  const formulario = document.querySelector('.c-main__formulario');

  console.log('chega aqui? ');

  formulario.innerHTML = `
    <fieldset class="c-main__criar-perguntas">
      <legend>Crie suas perguntas</legend>      
    </fieldset>
  `;

  const fieldset = document.querySelector('fieldset');

  for (let i = 0; i < quantidadePerguntas; i++) {
    fieldset.innerHTML += `
      <div class="c-main__content" onclick="esconderBlocos(${i})">
        <h2>Pergunta ${i + 1}</h2>
        <img src="assets/create.svg" class="c-content__icon esconder" />

        <div class="c-main__line">
          <input
            type="text"
            minlength="20"
            placeholder="Texto da pergunta"
            id="c-pergunta-${i + 1}__input--texto"
          />
          <input
            type="text"
            placeholder="Cor de fundo da pergunta"
            id="c-pergunta-${i + 1}__input--cor-fundo"
          />
        </div>

        <h2>Resposta correta</h2>
        <div class="c-main__line">
          <input
            type="text"
            placeholder="Resposta correta"
            id="c-pergunta-${i + 1}__input--resposta-correta"
            required
          />
          <input
            type="url"
            placeholder="URL da imagem"
            id="c-pergunta-${i + 1}__input--url-resposta-correta"
          />
        </div>

        <h2>Respostas incorretas</h2>
        <div class="c-main__line">
          <input
            type="text"
            placeholder="Resposta incorreta 1"
            id="c-pergunta-${i + 1}__input--resposta-incorreta-1"
            required
          />
          <input
            type="url"
            placeholder="URL da imagem 1"
            id="c-pergunta-${i + 1}__input--url-resposta-incorreta-1"
          />
        </div>

        <div class="c-main__line">
          <input
            type="text"
            placeholder="Resposta incorreta 2"
            id="c-pergunta-${i + 1}__input--resposta-incorreta-2"
          />
          <input
            type="url"
            placeholder="URL da imagem 2"
            id="c-pergunta-${i + 1}__input--url-resposta-incorreta-2"
          />
        </div>

        <div class="c-main__line">
          <input
            type="text"
            placeholder="Resposta incorreta 3"
            id="c-pergunta-${i + 1}__input--resposta-incorreta-3"
          />
          <input
            type="url"
            placeholder="URL da imagem 3"
            id="c-pergunta-${i + 1}__input--url-resposta-incorreta-3"
          />
        </div>
      </div>
    `;
  }

  esconderBlocos(0);

  fieldset.innerHTML += `
    <div class="c-main__formulario-button">
      <button class="c-main__button-prosseguir" onclick="avancarEtapa()" >
        Prosseguir para criar níveis
      </button>
    </div>
  `;
};

const carregarEtapaTres = () => {
  const formulario = document.querySelector('.c-main__formulario');

  formulario.innerHTML = `
    <fieldset class="c-main__niveis">
      <legend>Agora, decida os níveis!</legend>      
    </fieldset>
  `;

  const fieldset = document.querySelector('fieldset');

  for (let i = 0; i < quantidadeNiveis; i++) {
    fieldset.innerHTML += `
      <div class="c-main__content" onclick="esconderBlocos(${i})">
        <h2>Nível ${i + 1}</h2>
        <img src="assets/create.svg" class="c-content__icon esconder"/>
        <div class="c-main__line">
          <input
            type="text"
            minlength="10"
            placeholder="Título do nível"
            id="c-nivel-${i + 1}__input--titulo"
          />
          <input
            type="number"
            min="0"
            max="100"
            placeholder="% de acerto mínima"
            id="c-nivel-${i + 1}__input--porcentagem-acerto"
          />
          <input
            type="url"
            placeholder="URL da imagem do nível"
            id="c-nivel-${i + 1}__input--url"
          />
          <textarea
            placeholder="Descrição do nível"
            id="c-nivel-${i + 1}__textarea"
          ></textarea>
        </div>
      </div>
    `;
  }

  esconderBlocos(0);

  fieldset.innerHTML += `
    <div class="c-main__formulario-button">
      <button type="submit" class="c-main__button-prosseguir" onclick="avancarEtapa()">
        Finalizar Quizz
      </button>
    </div>
  `;
};

const carregarTelaSucesso = () => {
  const main = document.querySelector('.c-main');

  main.innerHTML = `
    <div class="c-main__sucesso">
      <h2>Seu quizz está pronto!</h2>

      <div class="c-sucesso__container-img">
        <div class="c-sucesso__background"></div>
        <img
          src="https://recreio.uol.com.br/media/_versions/harry_potter/hogwarts_capa_IoGEBAk_widelg.jpg"
          alt=""
        />
        <p>O quão Potterhead é você?</p>
      </div>

      <div class="c-sucesso__container-button">
        <button class="c-sucesso__button-acessar">Acessar Quizz</button>
      </div>
      <div class="c-sucesso__container-button">
        <button class="c-sucesso__button-voltar" onclick="carregarPaginaLista()">Voltar pra home</button>
      </div>
    </div>
  `;
};

const enviarQuizz = () => {
  carregarTelaSucesso();
};

const validarURL = url => {
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const regex = new RegExp(expression);

  if (url.match(regex)) {
    return true;
  }

  return false;
};

const validarEtapaUm = () => {
  const inputsInformacoesGerais = document.querySelectorAll('input');

  const titulo = inputsInformacoesGerais[0].value;
  const url = inputsInformacoesGerais[1].value;
  const valorQuantidadePerguntas = inputsInformacoesGerais[2].value;
  const valorQuantidadeNiveis = inputsInformacoesGerais[3].value;

  const tituloEhValido = titulo.length >= 20 && titulo.length <= 65;
  const urlEhValida = validarURL(url);
  const quantidadePerguntasEhValida = valorQuantidadePerguntas >= 3;
  const quantidadeNiveisEhValida = valorQuantidadeNiveis >= 2;

  if (
    !tituloEhValido ||
    !urlEhValida ||
    !quantidadePerguntasEhValida ||
    !quantidadeNiveisEhValida
  ) {
    return alert('Preencha os dados corretamente');
  }

  novoQuizz = {
    title: titulo,
    image: url
  };

  quantidadePerguntas = valorQuantidadePerguntas;
  quantidadeNiveis = valorQuantidadeNiveis;

  carregarEtapaDois();
  etapa++;
};

const validarEtapaDois = () => {
  const blocosPergunta = document.querySelectorAll('.c-main__content');
  let formularioInvalido = false;
  const perguntasArr = [];

  blocosPergunta.forEach((item, idx) => {
    const respostas = [];
    const perguntas = item.querySelectorAll('input');

    const RegExp = /^#[0-9A-F]{6}$/i;
    const corEhValida = RegExp.test(perguntas[1].value);

    const tituloEhValido = perguntas[0].value.length >= 20;

    if (!tituloEhValido || !corEhValida) {
      return (formularioInvalido = true);
    }

    let obj = {
      title: perguntas[0].value,
      color: perguntas[1].value
    };

    for (let i = 2; i < perguntas.length; i += 2) {
      const ehRespostaCorreta = i === 2;

      if (perguntas[i].value.length > 0) {
        let resposta = {
          text: perguntas[i].value,
          image: perguntas[i + 1].value,
          isCorrectAnswer: ehRespostaCorreta
        };

        respostas.push(resposta);
      } else if (i <= 4) {
        return (formularioInvalido = true);
      }
    }

    obj.answers = respostas;
    perguntasArr.push(obj);
  });

  if (formularioInvalido) {
    return alert('Preencha os dados corretamente!');
  }

  novoQuizz.questions = perguntasArr;
  avancarEtapa();
  etapa++;
};

const validarEtapaTres = () => {
  const blocosNiveis = document.querySelectorAll('.c-main__content');
  const niveisArr = [];
  const porcentagens = [];
  let formularioInvalido = false;

  blocosNiveis.forEach((item, idx) => {
    const niveis = item.querySelectorAll('input');
    const textarea = item.querySelector('textarea');

    const titulo = niveis[0].value;
    const valorMinimo = Number(niveis[1].value);
    const url = niveis[2].value;
    const descricao = textarea.value;

    const tituloEhValido = titulo.length >= 10;
    const valorMinimoEhValido = valorMinimo >= 0 && valorMinimo <= 100;
    const descricaoEhValida = descricao.length >= 30;
    const urlEhValida = validarURL(url);

    if (
      !tituloEhValido ||
      !valorMinimoEhValido ||
      !descricaoEhValida ||
      !urlEhValida
    ) {
      return (formularioInvalido = true);
    }

    let obj = {
      title: titulo,
      image: url,
      text: descricao,
      minValue: valorMinimo
    };

    niveisArr.push(obj);
    porcentagens.push(valorMinimo);
  });

  const valorMinimoEhValido = porcentagens.includes(0);

  if (formularioInvalido || !valorMinimoEhValido) {
    return alert('Preencha os dados corretamente!');
  }

  novoQuizz.levels = niveisArr;
  enviarQuizz();
  etapa === 1;
};

const avancarEtapa = () => {
  if (etapa === 1) {
    validarEtapaUm();
  } else if (etapa === 2) {
    validarEtapaDois();
  } else if (etapa === 3) {
    validarEtapaTres();
  }
};

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
      <form class="c-main__formulario">
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
              id="c-informacoes-gerais__input--quantidade-perguntas"
            />
            <input
              type="number"
              min="2"
              placeholder="Quantidade de níveis do quizz"
              id="c-informacoes-gerais__input--quantidade-niveis"
            />
          </div>

          <div class="c-main__formulario-button">
            <button class="c-main__button-prosseguir" onclick="avancarEtapa()">
              Prosseguir para criar perguntas
            </button>
          </div>
        </fieldset>
    </main>
  `;

  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', event => {
    event.preventDefault();
  });
};

carregarPaginaLista();

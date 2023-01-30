let levels = [];
let perguntasRespondidas = [];
let quantidadePerguntasQuizz = 0;
let idQuizz;

function carregarRespostas(data) {
  levels = data.levels;
  quantidadePerguntasQuizz = data.questions.length;
  idQuizz = data.id;

  const body = document.querySelector('body');

  body.innerHTML = `
    <header>
      <h1>BuzzQuizz</h1>
    </header>

    <div class="container-conteudos"></div>
  `;

  const respostasQuizz = document.querySelector('.container-conteudos');
  respostasQuizz.classList.add('novo-container');
  respostasQuizz.innerHTML = ` 
    <div>
        <div class="background-quizz">
            <div class="background-image">
                <img src=${data.image}>
            </div>
            <div class="titulo-quizz">
                <p>${data.title}</p>
            </div>
        </div>
    </div>
    <div class="container-perguntas">
      ${montaPerguntas(data.questions)}
    </div>
    `;
  document.querySelectorAll('.respostas').forEach(resposta => {
    resposta.addEventListener('click', selecionaResposta);
  });
}

function carregarPerguntas(id) {
  levels = [];
  perguntasRespondidas = [];
  quantidadePerguntasQuizz = 0;
  idQuizz = null;

  criarLoader();

  axios
    .get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    .then(resposta => {
      carregarRespostas(resposta.data);
      window.scrollTo({ behavior: 'smooth' }, 0, 0);
    });
}

function montaPerguntas(perguntas) {
  let perguntashtml = '';

  perguntas.forEach((pergunta, index) => {
    perguntashtml += `<div class="perguntas" id="${index}">
      <p style="background:${pergunta.color}" class="pergunta-titulo">${
      pergunta.title
    }</p>
      <div class="respostas-div">
        ${montaRespostas(pergunta.answers, index)}
      </div>
    </div>`;
  });

  return perguntashtml;
}

function montaRespostas(respostas, indicePergunta) {
  let respostashtml = '';
  const respostasEmbaralhadas = embaralhaRespostas(respostas);
  respostasEmbaralhadas.forEach(resposta => {
    respostashtml += `<div class="respostas hover-effect" data-certo="${resposta.isCorrectAnswer}" data-pergunta="${indicePergunta}">
      <img src="${resposta.image}" class="respostas-img">
      <p class="texto-resposta">${resposta.text}</p>
    </div>`;
  });

  return respostashtml;
}

function carregarResultado() {
  const quantidadeCorretas = perguntasRespondidas.filter(
    item => item === true
  ).length;
  const resultado = Math.round(
    (quantidadeCorretas / quantidadePerguntasQuizz) * 100
  );

  const levelAtingido = levels
    .filter(item => item.minValue <= resultado)
    .at(-1);

  const container = document.querySelector('.container-conteudos');

  container.innerHTML += `
    <div class="container-resultado">
      <div class="resultado-titulo">
        <h3>${resultado}% de acerto: ${levelAtingido.title}</h3>
      </div>
      <div class="resultado-descricao">
        <img src="${levelAtingido.image}" alt="" />
        <p>${levelAtingido.text} </p>
      </div>
    </div>

    <div class="c-sucesso__container-button">
      <button class="c-sucesso__button-acessar" onclick="carregarPerguntas(${idQuizz})">Reiniciar Quizz</button>
    </div>
    <div class="c-sucesso__container-button">
      <button class="c-sucesso__button-voltar" onclick="carregarPaginaLista()">Voltar pra home</button>
    </div>
  `;
}

function selecionaResposta() {
  this.dataset.clicado = true;
  carregaCoresRespostas(this.dataset.pergunta);

  if (perguntasRespondidas.length === quantidadePerguntasQuizz) {
    carregarResultado();
  }

  setTimeout(() => {
    const containerResultado = document.querySelector('.container-resultado');
    if (containerResultado !== null) {
      containerResultado.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else {
      document
        .getElementById(`${parseInt(this.dataset.pergunta) + 1}`)
        .scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    }
  }, 2000);
}

function embaralhaRespostas(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function carregaCoresRespostas(indicePergunta) {
  const respostasCores = document.querySelectorAll(
    `[data-pergunta="${indicePergunta}"]`
  );

  respostasCores.forEach(resposta => {
    if (resposta.dataset.certo === 'true') {
      if (resposta.dataset.clicado) {
        perguntasRespondidas.push(true);
      }
      resposta.style.color = '#009C22';
    } else {
      if (resposta.dataset.clicado) {
        perguntasRespondidas.push(false);
      }
      resposta.style.color = '#FF4B4B';
    }

    resposta.classList.remove('hover-effect');

    if (!resposta.dataset.clicado) {
      resposta.style.opacity = '0.3';
    }
    resposta.removeEventListener('click', selecionaResposta);
  });
}

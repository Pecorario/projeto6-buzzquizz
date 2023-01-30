function carregarRespostas(data) {
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
    document.querySelectorAll('.respostas').forEach((resposta) => {
      resposta.addEventListener('click', selecionaResposta);
    });
}

let perguntas = [];

function carregarPerguntas(id) {

  axios
    .get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    .then(resposta => {
      carregarRespostas(resposta.data);
      window.scrollTo(0, 0);
    });
}


function montaPerguntas(perguntas) {
  let perguntashtml = "";

  perguntas.forEach((pergunta, index) => {
    console.log(pergunta);
    perguntashtml += 
    `<div class="perguntas" id="${index}">
      <p style="background:${pergunta.color}">${pergunta.title}</p>
      <div class="respostas-div">
        ${montaRespostas(pergunta.answers, index)}
      </div>
    </div>`

  });
   
  return perguntashtml
}


function montaRespostas(respostas, indicePergunta) {
  let respostashtml = "";
  const respostasEmbaralhadas = embaralhaRespostas(respostas);
  respostasEmbaralhadas.forEach(resposta => {
    respostashtml += 
    `<div class="respostas" data-certo="${resposta.isCorrectAnswer}" data-pergunta="${indicePergunta}">
      <img src="${resposta.image}" class="respostas-img">
      <p class="texto-resposta">${resposta.text}</p>
    </div>`
  });

  return respostashtml
}

function selecionaResposta() {
  console.log(this);
  this.dataset.clicado = true;
  carregaCoresRespostas(this.dataset.pergunta, this);
  setTimeout(() => {
    document.getElementById(`${parseInt(this.dataset.pergunta) + 1}`).scrollIntoView(false);
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

function carregaCoresRespostas(indicePergunta, respostaClicada){
  const respostasCores = document.querySelectorAll(`[data-pergunta="${indicePergunta}"]`);
  console.log(respostaClicada);
  
  respostasCores.forEach((resposta) => {
    console.log(resposta)
    if(resposta.dataset.certo === "true"){
      resposta.style.color= "#009C22";
    } else {
      resposta.style.color=  "#FF4B4B"
    }
    if(!resposta.dataset.clicado){
      resposta.style.opacity= "0.3";
    } 
    resposta.removeEventListener('click', selecionaResposta);
  });
}
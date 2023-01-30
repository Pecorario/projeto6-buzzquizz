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
}

let perguntas = [];

function carregarPerguntas(id) {

  axios
    .get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    .then(resposta => {
      console.log(resposta);
      carregarRespostas(resposta.data);
    });
}

function montaPerguntas(perguntas) {
  let perguntashtml = "";

  perguntas.forEach(pergunta => {
    console.log(pergunta);
    perguntashtml += 
    `<div class="perguntas">
      <p style="background:${pergunta.color}">${pergunta.title}</p>
      <div class="respostas-div">
        ${montaRespostas(pergunta.answers)}
      </div>
    </div>`

  });
   
  return perguntashtml
}

function montaRespostas(respostas) {
  let respostashtml = "";

  respostas.forEach(resposta => {
    respostashtml += 
    `<div class="respostas" data-certo="${resposta.isCorrectAnswer}" onclick="selecionaResposta(this)">
      <img src="${resposta.image}" class="respostas-img">
      <p class="texto-resposta">${resposta.text}</p>
    </div>`
  });

  return respostashtml
}

function selecionaResposta(selecionado) {

}
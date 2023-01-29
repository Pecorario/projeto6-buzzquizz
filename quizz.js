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
    <div class="">
      ${montaPerguntas(data.questions)}
    </div>
    `;
}

let perguntas = [];

function carregarPerguntas() {
  const id = 16500;

  axios
    .get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`)
    .then(resposta => {
      console.log(resposta);
      carregarRespostas(resposta.data);
    });
}

carregarPerguntas();

function montaPerguntas(perguntas) {
  let perguntashtml = "";

  perguntas.forEach(pergunta => {
    console.log(pergunta);
    perguntashtml += 
    `<div class="perguntas">
      <p>${pergunta.title}</p>
      <p>${pergunta.color}</p>
      ${montaRespostas(pergunta.answers)}
    </div>`

  });
   
  return perguntashtml
}

function montaRespostas(respostas) {
  let respostashtml = "";

  respostas.forEach(resposta => {
    respostashtml += 
    `<div>
      <p>${resposta.text}</p>
      <img src="${resposta.image}">
      <div>${resposta.isCorrectAnswer}</div>
    </div>`
  });

  return respostashtml
}
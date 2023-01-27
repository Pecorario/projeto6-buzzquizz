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
    `
}

let perguntas = [{
	id: 1,
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
}]

function carregarPerguntas() {
    const id = 1;

    axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`).then((resposta) => {
        console.log(resposta);
        carregarRespostas(resposta.data);
    });
} 

carregarPerguntas();
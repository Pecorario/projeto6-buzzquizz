function carregarPerguntas() {
    const perguntasQuizz = document.querySelector('.container-conteudos');
    perguntasQuizz.classList.add('novo-container');
    perguntasQuizz.innerHTML = ` 
    <div>
        <div class="background-quizz">
            <div class="titulo-quizz">
                <p>O quão Potterhead é você?</p>
            </div>
        </div>
    </div>
    `
}
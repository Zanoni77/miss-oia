const perguntas = [
{
pergunta: "A caça de animais silvestres sem autorização dos órgãos ambientais é considerada crime ambiental.",
alternativas: [
"Verdadeiro",
"Falso"
],
correta: 0,
explicacao:
"Afirmativa verdadeira! A caça de animais silvestres sem autorização pode configurar crime ambiental, pois a legislação brasileira protege a fauna e estabelece regras para sua captura."
},

{
    pergunta: "A pesca ilegal pode prejudicar os ecossistemas aquáticos e diminuir as populações de peixes.",
    alternativas: [
        "Verdadeiro",
        "Falso"
    ],
    correta: 0,
    explicacao:
        "Afirmativa verdadeira! A pesca realizada de maneira ilegal, especialmente durante períodos proibidos ou com métodos não permitidos, pode reduzir populações de peixes e desequilibrar os ecossistemas."
}


];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

const perguntaElemento = document.getElementById("pergunta");
const alternativasElemento = document.getElementById("alternativas");
const numeroPergunta = document.getElementById("numero-pergunta");
const barraProgresso = document.getElementById("barra-progresso");

const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedback-icone");
const feedbackTitulo = document.getElementById("feedback-titulo");
const feedbackTexto = document.getElementById("feedback-texto");

const botaoProximo = document.getElementById("botao-proximo");

const caixaQuiz = document.querySelector(".caixa-quiz");
const resultado = document.getElementById("resultado");
const pontuacaoElemento = document.getElementById("pontuacao");
const textoResultado = document.getElementById("texto-resultado");

function carregarPergunta() {

respondeu = false;

const atual = perguntas[perguntaAtual];

perguntaElemento.textContent = atual.pergunta;

numeroPergunta.textContent =
    `${perguntaAtual + 1} / ${perguntas.length}`;

barraProgresso.style.width =
    `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

alternativasElemento.innerHTML = "";

feedback.className = "feedback";
feedbackIcone.textContent = "";
feedbackTitulo.textContent = "";
feedbackTexto.textContent = "";

botaoProximo.classList.remove("mostrar");

atual.alternativas.forEach((alternativa, indice) => {

    const botao = document.createElement("button");

    botao.classList.add("alternativa");
    botao.textContent = alternativa;

    botao.addEventListener("click", () => {
        verificarResposta(indice, botao);
    });

    alternativasElemento.appendChild(botao);
});


}

function verificarResposta(indice, botaoSelecionado) {

if (respondeu) {
    return;
}

respondeu = true;

const atual = perguntas[perguntaAtual];
const botoes = document.querySelectorAll(".alternativa");

botoes.forEach(botao => {
    botao.style.pointerEvents = "none";
});

if (indice === atual.correta) {

    pontuacao++;

    botaoSelecionado.classList.add("correta");

    feedback.className = "feedback correto";
    feedbackIcone.textContent = "✅";
    feedbackTitulo.textContent = "Muito bem! Você acertou!";
    feedbackTexto.textContent = atual.explicacao;

} else {

    botaoSelecionado.classList.add("errada");

    botoes[atual.correta].classList.add("correta");

    feedback.className = "feedback errado";
    feedbackIcone.textContent = "💡";
    feedbackTitulo.textContent = "Quase! Veja a explicação:";
    feedbackTexto.textContent = atual.explicacao;
}

if (perguntaAtual === perguntas.length - 1) {
    botaoProximo.textContent = "Ver resultado 🌱";
} else {
    botaoProximo.textContent = "Próxima afirmativa →";
}

botaoProximo.classList.add("mostrar");


}

botaoProximo.addEventListener("click", () => {

if (!respondeu) {
    return;
}

perguntaAtual++;

if (perguntaAtual < perguntas.length) {

    carregarPergunta();

} else {

    mostrarResultado();
}


});

function mostrarResultado() {

document.querySelector(".progresso").style.display = "none";
document.querySelector(".caixa-perguntas").style.display = "none";
alternativasElemento.style.display = "none";
feedback.style.display = "none";
botaoProximo.style.display = "none";

resultado.style.display = "block";

pontuacaoElemento.textContent =
    `${pontuacao} de ${perguntas.length} afirmativas corretas`;

if (pontuacao === perguntas.length) {

    textoResultado.textContent =
        "Excelente! 🌿 Você demonstrou que conhece a importância de proteger a fauna e os ambientes naturais.";

} else if (pontuacao === 1) {

    textoResultado.textContent =
        "Muito bem! 🌱 Você acertou uma afirmativa. Continue aprendendo sobre a preservação da natureza.";

} else {

    textoResultado.textContent =
        "Continue estudando! 🐾 Conhecer a legislação ambiental é um passo importante para ajudar na proteção da natureza.";
}


}

function reiniciarQuiz() {

perguntaAtual = 0;
pontuacao = 0;

document.querySelector(".progresso").style.display = "block";
document.querySelector(".caixa-perguntas").style.display = "block";
alternativasElemento.style.display = "grid";

carregarPergunta();


}

carregarPergunta();
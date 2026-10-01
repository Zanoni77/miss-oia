const perguntas = [
{
pergunta: "A caça de animais silvestres sem autorização é considerada crime ambiental?",
resposta: "Verdadeiro",
explicacao: "Verdadeiro! Os animais silvestres são protegidos pela legislação ambiental. A caça sem autorização pode configurar crime ambiental."
},

{
    pergunta: "A pesca ilegal pode prejudicar os ecossistemas aquáticos e diminuir a quantidade de peixes?",
    resposta: "Verdadeiro",
    explicacao: "Verdadeiro! A pesca ilegal pode retirar muitos animais do ambiente e prejudicar a reprodução dos peixes, causando desequilíbrio ambiental."
}

];

let perguntaAtual = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const alternativas = document.getElementById("alternativas");
const contador = document.getElementById("contador");
const barra = document.getElementById("barraProgresso");

const feedback = document.getElementById("feedback");
const feedbackIcone = document.getElementById("feedbackIcone");
const feedbackTitulo = document.getElementById("feedbackTitulo");
const feedbackTexto = document.getElementById("feedbackTexto");

const btnProximo = document.getElementById("btnProximo");

const resultado = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao");
const mensagem = document.getElementById("mensagem");

function carregarPergunta() {

const atual = perguntas[perguntaAtual];


pergunta.textContent = atual.pergunta;


contador.textContent =
    (perguntaAtual + 1) + " / " + perguntas.length;


const progresso =
    ((perguntaAtual + 1) / perguntas.length) * 100;


barra.style.width =
    progresso + "%";


alternativas.innerHTML = "";


feedback.className = "feedback";

feedbackIcone.textContent = "";

feedbackTitulo.textContent = "";

feedbackTexto.textContent = "";


btnProximo.classList.remove("mostrar");


const opcoes = [
    "Verdadeiro",
    "Falso"
];


opcoes.forEach(function(opcao) {

    const botao =
        document.createElement("button");


    botao.className =
        "alternativa";


    botao.textContent =
        opcao;


    botao.onclick = function() {

        verificarResposta(
            opcao,
            botao
        );

    };


    alternativas.appendChild(
        botao
    );

});

}

function verificarResposta(
resposta,
botaoSelecionado
) {

const atual =
    perguntas[perguntaAtual];


const botoes =
    document.querySelectorAll(
        ".alternativa"
    );


botoes.forEach(function(botao) {

    botao.disabled = true;

});


if (resposta === atual.resposta) {

    pontos++;


    botaoSelecionado.classList.add(
        "correta"
    );


    feedback.className =
        "feedback correto";


    feedbackIcone.textContent =
        "✅";


    feedbackTitulo.textContent =
        "Resposta correta!";


    feedbackTexto.textContent =
        atual.explicacao;

} else {

    botaoSelecionado.classList.add(
        "errada"
    );


    feedback.className =
        "feedback errado";


    feedbackIcone.textContent =
        "❌";


    feedbackTitulo.textContent =
        "Resposta incorreta!";


    feedbackTexto.textContent =
        atual.explicacao;


    botoes.forEach(function(botao) {

        if (
            botao.textContent ===
            atual.resposta
        ) {

            botao.classList.add(
                "correta"
            );

        }

    });

}


btnProximo.classList.add(
    "mostrar"
);


if (
    perguntaAtual ===
    perguntas.length - 1
) {

    btnProximo.textContent =
        "Ver resultado ✓";

} else {

    btnProximo.textContent =
        "Próxima afirmativa →";

}

}

btnProximo.onclick = function() {

perguntaAtual++;


if (
    perguntaAtual <
    perguntas.length
) {

    carregarPergunta();

} else {

    mostrarResultado();

}

};

function mostrarResultado() {

document.querySelector(
    ".topo-quiz"
).style.display = "none";


document.querySelector(
    ".barra"
).style.display = "none";


document.querySelector(
    ".pergunta"
).style.display = "none";


alternativas.style.display =
    "none";


feedback.style.display =
    "none";


btnProximo.style.display =
    "none";


resultado.style.display =
    "block";


pontuacao.textContent =
    pontos +
    " de " +
    perguntas.length +
    " acertos";


if (pontos === 2) {

    mensagem.textContent =
        "🌿 Excelente! Você conhece a importância de proteger os animais e preservar a natureza.";

} else if (pontos === 1) {

    mensagem.textContent =
        "🌱 Muito bem! Você acertou uma afirmativa. Continue aprendendo sobre a preservação ambiental.";

} else {

    mensagem.textContent =
        "🐾 Continue estudando! Conhecer os problemas ambientais é importante para proteger a natureza.";

}

}

function reiniciarQuiz() {

perguntaAtual = 0;

pontos = 0;


document.querySelector(
    ".topo-quiz"
).style.display = "flex";


document.querySelector(
    ".barra"
).style.display = "block";


document.querySelector(
    ".pergunta"
).style.display = "block";


alternativas.style.display =
    "grid";


resultado.style.display =
    "none";


btnProximo.style.display =
    "none";


carregarPergunta();

}

/* INICIA O QUIZ */

carregarPergunta();
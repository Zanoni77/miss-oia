const perguntas = [

{
    pergunta:
        "A caça de animais silvestres sem autorização dos órgãos ambientais é considerada crime ambiental.",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A fauna silvestre é protegida pela legislação ambiental. A caça sem autorização pode configurar crime ambiental."
},

{
    pergunta:
        "A pesca ilegal pode prejudicar os ecossistemas aquáticos e diminuir a quantidade de peixes.",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A pesca ilegal pode capturar peixes em excesso ou durante períodos proibidos, prejudicando a reprodução e o equilíbrio dos ecossistemas."
}

];

let perguntaAtual = 0;

let pontuacao = 0;

let respondeu = false;

/* ELEMENTOS DA PÁGINA */

const perguntaElemento =
document.getElementById("pergunta");

const alternativasElemento =
document.getElementById("alternativas");

const contadorElemento =
document.getElementById("contador");

const barraProgresso =
document.getElementById("barraProgresso");

const feedback =
document.getElementById("feedback");

const feedbackIcone =
document.getElementById("feedbackIcone");

const feedbackTitulo =
document.getElementById("feedbackTitulo");

const feedbackTexto =
document.getElementById("feedbackTexto");

const btnProximo =
document.getElementById("btnProximo");

const resultado =
document.getElementById("resultado");

const pontuacaoElemento =
document.getElementById("pontuacao");

const mensagemElemento =
document.getElementById("mensagem");

/* CARREGAR PERGUNTA */

function carregarPergunta() {

respondeu = false;

const pergunta = perguntas[perguntaAtual];


perguntaElemento.textContent =
    pergunta.pergunta;


contadorElemento.textContent =
    `${perguntaAtual + 1} / ${perguntas.length}`;


const progresso =
    ((perguntaAtual + 1) / perguntas.length) * 100;


barraProgresso.style.width =
    progresso + "%";


alternativasElemento.innerHTML = "";


feedback.className = "feedback";

feedbackIcone.textContent = "";

feedbackTitulo.textContent = "";

feedbackTexto.textContent = "";


btnProximo.classList.remove("mostrar");


pergunta.alternativas.forEach(
    function (alternativa, indice) {

        const botao =
            document.createElement("button");


        botao.className =
            "alternativa";


        botao.textContent =
            alternativa;


        botao.addEventListener(
            "click",
            function () {

                verificarResposta(
                    indice,
                    botao
                );

            }
        );


        alternativasElemento.appendChild(
            botao
        );

    }
);

}

/* VERIFICAR RESPOSTA */

function verificarResposta(
indice,
botaoSelecionado
) {

if (respondeu) {
    return;
}


respondeu = true;


const pergunta =
    perguntas[perguntaAtual];


const botoes =
    document.querySelectorAll(
        ".alternativa"
    );


botoes.forEach(
    function (botao) {

        botao.style.pointerEvents =
            "none";

    }
);


if (indice === pergunta.correta) {

    pontuacao++;


    botaoSelecionado.classList.add(
        "correta"
    );


    feedback.className =
        "feedback correto";


    feedbackIcone.textContent =
        "✅";


    feedbackTitulo.textContent =
        "Muito bem! Você acertou!";


    feedbackTexto.textContent =
        pergunta.explicacao;

} else {

    botaoSelecionado.classList.add(
        "errada"
    );


    botoes[pergunta.correta]
        .classList.add("correta");


    feedback.className =
        "feedback errado";


    feedbackIcone.textContent =
        "💡";


    feedbackTitulo.textContent =
        "Veja a explicação:";


    feedbackTexto.textContent =
        pergunta.explicacao;

}


btnProximo.classList.add(
    "mostrar"
);


if (
    perguntaAtual ===
    perguntas.length - 1
) {

    btnProximo.innerHTML =
        'Ver resultado <span>✓</span>';

} else {

    btnProximo.innerHTML =
        'Próxima afirmativa <span>→</span>';

}

}

/* PRÓXIMA PERGUNTA */

btnProximo.addEventListener(
"click",
function () {

    perguntaAtual++;


    if (
        perguntaAtual <
        perguntas.length
    ) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

}

);

/* MOSTRAR RESULTADO */

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


alternativasElemento.style.display =
    "none";


feedback.style.display =
    "none";


btnProximo.style.display =
    "none";


resultado.style.display =
    "block";


pontuacaoElemento.textContent =
    `${pontuacao} de ${perguntas.length} acertos`;


if (pontuacao === 2) {

    mensagemElemento.textContent =
        "Excelente! 🌿 Você demonstrou que entende a importância de proteger os animais e preservar os ambientes naturais.";

} else if (pontuacao === 1) {

    mensagemElemento.textContent =
        "Muito bem! 🌱 Você acertou uma das afirmativas. Continue aprendendo sobre a preservação da natureza.";

} else {

    mensagemElemento.textContent =
        "Continue estudando! 🐾 Conhecer os problemas ambientais é um passo importante para ajudar a proteger a natureza.";

}

}

/* REINICIAR */

function reiniciarQuiz() {

perguntaAtual = 0;

pontuacao = 0;

document.querySelector(
    ".topo-quiz"
).style.display = "flex";


document.querySelector(
    ".barra"
).style.display = "block";


document.querySelector(
    ".pergunta"
).style.display = "block";


alternativasElemento.style.display =
    "grid";


resultado.style.display =
    "none";


btnProximo.style.display =
    "none";


carregarPergunta();

}

/* INICIAR */

carregarPergunta();
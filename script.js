const perguntas = [

{
    categoria: "FAUNA",

    pergunta:
        "A caça de animais silvestres sem autorização dos órgãos ambientais pode ser considerada crime ambiental?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A fauna silvestre é protegida pela legislação ambiental, e a caça sem autorização pode configurar crime ambiental."
},


{
    categoria: "PESCA",

    pergunta:
        "A pesca ilegal pode diminuir as populações de peixes e prejudicar o equilíbrio dos ecossistemas aquáticos?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A retirada excessiva de peixes pode prejudicar a reprodução das espécies e desequilibrar o ambiente aquático."
},


{
    categoria: "PESCA",

    pergunta:
        "Respeitar o período de reprodução dos peixes é uma forma de ajudar na preservação das espécies?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! Respeitar períodos de reprodução permite que os animais se reproduzam antes de serem capturados."
},


{
    categoria: "FAUNA",

    pergunta:
        "A captura e o comércio ilegal de animais silvestres podem contribuir para a redução de suas populações?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A retirada de animais da natureza para comércio ilegal pode reduzir suas populações e prejudicar os ecossistemas."
},


{
    categoria: "MEIO AMBIENTE",

    pergunta:
        "A preservação dos animais silvestres também contribui para o equilíbrio dos ecossistemas?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! Os animais participam de diversas relações ecológicas, como dispersão de sementes, polinização e controle de populações."
},


{
    categoria: "PRESERVAÇÃO",

    pergunta:
        "Denunciar atividades de caça e pesca ilegais pode ajudar no combate aos crimes ambientais?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! Comunicar atividades suspeitas às autoridades ambientais pode contribuir para a fiscalização e proteção da fauna."
},


{
    categoria: "CAÇA",

    pergunta:
        "A caça ilegal pode afetar apenas o animal capturado, sem causar consequências para o restante do ambiente?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 1,

    explicacao:
        "Falso! A retirada de animais pode afetar cadeias alimentares, relações ecológicas e o equilíbrio de todo o ecossistema."
},


{
    categoria: "PESCA",

    pergunta:
        "Pescar utilizando métodos proibidos pode causar impactos negativos nos ambientes aquáticos?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! Métodos proibidos podem capturar animais de forma indiscriminada e causar danos ao ambiente."
},


{
    categoria: "FAUNA",

    pergunta:
        "Todos os animais encontrados na natureza podem ser capturados livremente por qualquer pessoa?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 1,

    explicacao:
        "Falso! A captura de animais silvestres é regulamentada e, em diversas situações, é proibida sem autorização."
},


{
    categoria: "PRESERVAÇÃO",

    pergunta:
        "A educação ambiental pode ajudar as pessoas a compreender a importância de proteger a fauna?",

    alternativas: [
        "Verdadeiro",
        "Falso"
    ],

    correta: 0,

    explicacao:
        "Verdadeiro! A educação ambiental ajuda a conscientizar as pessoas sobre a importância da conservação da natureza."
}

];

let perguntaAtual = 0;
let pontos = 0;
let erros = 0;

/* ELEMENTOS */

const perguntaElemento =
document.getElementById("pergunta");

const alternativasElemento =
document.getElementById("alternativas");

const contadorElemento =
document.getElementById("contador");

const pontosElemento =
document.getElementById("pontos");

const progressoElemento =
document.getElementById("progresso");

const categoriaElemento =
document.getElementById("categoria");

const feedbackElemento =
document.getElementById("feedback");

const feedbackIcon =
document.getElementById("feedbackIcon");

const feedbackTitulo =
document.getElementById("feedbackTitulo");

const feedbackTexto =
document.getElementById("feedbackTexto");

const btnProximo =
document.getElementById("btnProximo");

const resultado =
document.getElementById("resultado");

const pontuacaoFinal =
document.getElementById("pontuacaoFinal");

const acertosElemento =
document.getElementById("acertos");

const errosElemento =
document.getElementById("erros");

const porcentagemElemento =
document.getElementById("porcentagem");

const mensagemElemento =
document.getElementById("mensagem");

const btnReiniciar =
document.getElementById("btnReiniciar");

/* CARREGAR PERGUNTA */

function carregarPergunta() {

const atual =
    perguntas[perguntaAtual];


perguntaElemento.textContent =
    atual.pergunta;


categoriaElemento.textContent =
    atual.categoria;


contadorElemento.textContent =
    (perguntaAtual + 1) +
    " / " +
    perguntas.length;


pontosElemento.textContent =
    pontos;


const porcentagem =
    ((perguntaAtual + 1) /
    perguntas.length) * 100;


progressoElemento.style.width =
    porcentagem + "%";


alternativasElemento.innerHTML =
    "";


feedbackElemento.className =
    "feedback";


feedbackIcon.textContent =
    "";


feedbackTitulo.textContent =
    "";


feedbackTexto.textContent =
    "";


btnProximo.classList.remove(
    "mostrar"
);


atual.alternativas.forEach(
    function(alternativa, indice) {

        const botao =
            document.createElement(
                "button"
            );


        botao.type = "button";


        botao.className =
            "alternativa";


        botao.textContent =
            alternativa;


        botao.addEventListener(
            "click",
            function() {

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

const atual =
    perguntas[perguntaAtual];


const botoes =
    document.querySelectorAll(
        ".alternativa"
    );


botoes.forEach(
    function(botao) {

        botao.disabled = true;

    }
);


if (indice === atual.correta) {

    pontos++;


    pontosElemento.textContent =
        pontos;


    botaoSelecionado.classList.add(
        "correta"
    );


    feedbackElemento.className =
        "feedback correto";


    feedbackIcon.textContent =
        "🎉";


    feedbackTitulo.textContent =
        "Muito bem! Você acertou!";


    feedbackTexto.textContent =
        atual.explicacao;

} else {

    erros++;


    botaoSelecionado.classList.add(
        "errada"
    );


    feedbackElemento.className =
        "feedback errado";


    feedbackIcon.textContent =
        "💡";


    feedbackTitulo.textContent =
        "Não foi dessa vez!";


    feedbackTexto.textContent =
        atual.explicacao;


    botoes.forEach(
        function(botao) {

            if (
                botao.textContent ===
                atual.alternativas[
                    atual.correta
                ]
            ) {

                botao.classList.add(
                    "correta"
                );

            }

        }
    );

}


btnProximo.classList.add(
    "mostrar"
);


if (
    perguntaAtual ===
    perguntas.length - 1
) {

    btnProximo.innerHTML =
        "Ver resultado 🏆";

} else {

    btnProximo.innerHTML =
        "Próxima pergunta →";

}

}

/* PRÓXIMA PERGUNTA */

btnProximo.addEventListener(
"click",
function() {

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

/* RESULTADO */

function mostrarResultado() {

document.querySelector(
    ".informacoes"
).style.display = "none";


document.querySelector(
    ".barra"
).style.display = "none";


document.querySelector(
    ".vidas"
).style.display = "none";


document.querySelector(
    ".pergunta"
).style.display = "none";


alternativasElemento.style.display =
    "none";


feedbackElemento.style.display =
    "none";


btnProximo.style.display =
    "none";


resultado.style.display =
    "block";


pontuacaoFinal.textContent =
    pontos +
    " / " +
    perguntas.length;


acertosElemento.textContent =
    pontos;


errosElemento.textContent =
    erros;


const aproveitamento =
    Math.round(
        (pontos / perguntas.length) * 100
    );


porcentagemElemento.textContent =
    aproveitamento + "%";


if (aproveitamento === 100) {

    mensagemElemento.textContent =
        "🌳 Perfeito! Você acertou todas as perguntas e demonstrou excelente conhecimento sobre a preservação ambiental.";

} else if (aproveitamento >= 70) {

    mensagemElemento.textContent =
        "🌿 Muito bom! Você mostrou um ótimo conhecimento sobre a proteção da fauna e dos ambientes naturais.";

} else if (aproveitamento >= 50) {

    mensagemElemento.textContent =
        "🌱 Bom trabalho! Você já conhece vários conceitos importantes. Continue aprendendo.";

} else {

    mensagemElemento.textContent =
        "🐾 Continue estudando! Conhecer a importância da preservação é o primeiro passo para proteger a natureza.";

}

}

/* REINICIAR */

btnReiniciar.addEventListener(
"click",
function() {

    perguntaAtual = 0;

    pontos = 0;

    erros = 0;


    document.querySelector(
        ".informacoes"
    ).style.display = "flex";


    document.querySelector(
        ".barra"
    ).style.display = "block";


    document.querySelector(
        ".vidas"
    ).style.display = "flex";


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

);

/* COMEÇAR */

carregarPergunta();
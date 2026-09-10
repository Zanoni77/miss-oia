const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você percebe que alguém está sofrendo cyberbullying, qual atitude considera mais adequada?",
        alternativas: [
            {
                texto: "Apoiar a pessoa, guardar provas e denunciar o conteúdo ou comportamento.",
                afirmacao: "Você demonstra empatia, responsabilidade e coragem para ajudar a combater a violência virtual."
            },
            {
                texto: "Evitar se envolver para não acabar se tornando alvo também.",
                afirmacao: "Você procura se proteger de conflitos, mas é importante lembrar que pequenas atitudes de apoio podem fazer grande diferença."
            }
        ]
    },

    {
        enunciado: "Pensando no futuro do planeta, qual atitude você considera mais importante para diminuir os impactos ambientais?",
        alternativas: [
            {
                texto: "Investir em energias renováveis, tecnologias sustentáveis e mudanças nos hábitos de consumo.",
                afirmacao: "Você demonstra preocupação com o futuro e acredita que a tecnologia e as atitudes individuais podem contribuir para um mundo mais sustentável."
            },
            {
                texto: "Priorizar mudanças pequenas no dia a dia, como economizar água, energia e reduzir o desperdício.",
                afirmacao: "Você acredita que grandes mudanças começam com atitudes simples e consistentes no cotidiano."
            }
        ]
    },

    {
        enunciado: "Quando você comete um erro, qual costuma ser sua atitude?",
        alternativas: [
            {
                texto: "Procuro entender o que aconteceu, aprender com o erro e tentar novamente.",
                afirmacao: "Você demonstra resiliência e entende que os erros podem ser oportunidades importantes de aprendizado."
            },
            {
                texto: "Fico preocupado com o que as outras pessoas vão pensar de mim.",
                afirmacao: "Você valoriza a opinião das pessoas, mas desenvolver autoconfiança pode ajudá-lo a lidar melhor com seus próprios erros."
            }
        ]
    },

    {
        enunciado: "Nas redes sociais, você encontra uma notícia que parece muito importante, mas não sabe se é verdadeira. O que faria?",
        alternativas: [
            {
                texto: "Verificaria a informação em fontes confiáveis antes de compartilhar.",
                afirmacao: "Você demonstra pensamento crítico e responsabilidade no uso das redes sociais."
            },
            {
                texto: "Compartilharia rapidamente para que outras pessoas também possam saber da informação.",
                afirmacao: "Você gosta de compartilhar novidades, mas verificar a informação antes é essencial para evitar a propagação de notícias falsas."
            }
        ]
    },

    {
        enunciado: "Quando precisa tomar uma decisão importante, qual atitude combina mais com você?",
        alternativas: [
            {
                texto: "Analiso as possibilidades, penso nas consequências e depois tomo minha decisão.",
                afirmacao: "Você demonstra responsabilidade e costuma pensar antes de agir, considerando diferentes consequências."
            },
            {
                texto: "Confio na minha intuição e decido de acordo com o que estou sentindo no momento.",
                afirmacao: "Você confia em seus sentimentos e intuições, mostrando espontaneidade e confiança nas próprias escolhas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos dizer sobre você!";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

    caixaResultado.style.display = "block";
}

mostraPergunta();

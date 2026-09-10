const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
  const perguntas = [
    {
        enunciado: "O cyberbullying pode causar consequências emocionais e sociais para quem sofre esse tipo de violência. Qual atitude pode ajudar a combater esse problema?",
        alternativas: [
            {
                texto: "Incentivar o respeito nas redes sociais e denunciar situações de agressão virtual.",
                afirmacao: "Você demonstra responsabilidade e empatia, procurando contribuir para um ambiente virtual mais seguro e respeitoso."
            },
            {
                texto: "Ignorar as agressões virtuais para evitar que o problema fique ainda maior.",
                afirmacao: "Você prefere evitar conflitos, mas pode desenvolver uma postura mais ativa diante de situações de violência virtual."
            }
        ]
    },
    {
        enunciado: "A busca por fontes de energia renováveis é importante para diminuir os impactos ambientais. Entre as opções disponíveis, como você acredita que devemos lidar com a energia geotérmica?",
        alternativas: [
            {
                texto: "Investir em pesquisas para tornar a energia geotérmica mais acessível e ampliar seu uso de forma sustentável.",
                afirmacao: "Você possui um perfil inovador e acredita na ciência e na tecnologia como ferramentas para construir um futuro mais sustentável."
            },
            {
                texto: "Utilizar a energia geotérmica com cautela, avaliando seus custos e possíveis impactos ambientais antes de ampliar sua utilização.",
                afirmacao: "Você demonstra equilíbrio em suas decisões, considerando tanto os benefícios ambientais quanto os possíveis custos e riscos."
            }
        ]
    },
    {
        enunciado: "A autoestima está relacionada à maneira como uma pessoa percebe suas próprias capacidades e características. O que pode ajudar a fortalecê-la no dia a dia?",
        alternativas: [
            {
                texto: "Reconhecer suas qualidades, aprender com os erros e valorizar suas próprias conquistas.",
                afirmacao: "Você demonstra autoconhecimento e uma atitude positiva diante da vida, reconhecendo que todos possuem qualidades e pontos a desenvolver."
            },
            {
                texto: "Buscar constantemente a aprovação das outras pessoas para se sentir bem consigo mesmo.",
                afirmacao: "Você demonstra que valoriza a opinião das pessoas ao seu redor, mas pode se beneficiar de um maior desenvolvimento da autoconfiança e do autoconhecimento."
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

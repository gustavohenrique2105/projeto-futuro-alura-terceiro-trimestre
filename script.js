
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoNovamente = document.querySelector(".novamente-btn");

const areaJogo = document.querySelector(".area-jogo");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const contadorPergunta = document.querySelector(".contador-pergunta");
const barraProgresso = document.querySelector(".barra-progresso");

const perguntas = [
    {
        enunciado: "CASO 001: Uma IA começa a produzir notícias falsas usando vozes e rostos de pessoas reais. Qual deve ser a prioridade?",
        alternativas: [
            {
                texto: "Criar mecanismos para identificar conteúdos artificiais e responsabilizar seus criadores.",
                afirmacao: "Você prioriza a segurança informacional e a responsabilização pelo uso indevido da IA."
            },
            {
                texto: "Preservar a liberdade de criação e educar as pessoas para verificar informações.",
                afirmacao: "Você valoriza a liberdade de criação e acredita que a educação crítica é essencial para enfrentar a desinformação."
            }
        ]
    },
    {
        enunciado: "CASO 002: Uma escola oferece um assistente de IA para todos os estudantes. Como a ferramenta deveria ser utilizada?",
        alternativas: [
            {
                texto: "Como apoio para estudar, praticar e compreender conteúdos difíceis.",
                afirmacao: "Você entende que a IA pode ampliar o aprendizado quando ajuda o estudante a desenvolver suas próprias capacidades."
            },
            {
                texto: "Como uma forma de automatizar a maior parte das tarefas escolares.",
                afirmacao: "Você valoriza a praticidade da automação, mas o aprendizado exige participação ativa e compreensão dos conteúdos."
            }
        ]
    },
    {
        enunciado: "CASO 003: Uma empresa substitui milhares de trabalhadores por sistemas automatizados. O que deveria acontecer?",
        alternativas: [
            {
                texto: "Investir em requalificação e garantir apoio para quem perdeu o emprego.",
                afirmacao: "Você considera que a transformação tecnológica deve vir acompanhada de responsabilidade social e novas oportunidades."
            },
            {
                texto: "Permitir que as empresas inovem e deixar o mercado criar novas profissões.",
                afirmacao: "Você acredita na capacidade de inovação do mercado, embora a transição profissional também possa exigir apoio e planejamento."
            }
        ]
    },
    {
        enunciado: "CASO 004: Um algoritmo decide quem recebe crédito, emprego ou acesso a determinados serviços. Como garantir justiça?",
        alternativas: [
            {
                texto: "Exigir auditorias, transparência e possibilidade de contestar decisões.",
                afirmacao: "Você defende que decisões automatizadas importantes precisam ser verificáveis e contestáveis."
            },
            {
                texto: "Aceitar os resultados se o algoritmo demonstrar maior precisão que as pessoas.",
                afirmacao: "Você valoriza decisões baseadas em desempenho, mas a precisão precisa ser avaliada junto com possíveis vieses e impactos."
            }
        ]
    },
    {
        enunciado: "CASO 005: Em 2049, sistemas de IA participam de decisões que afetam toda a humanidade. Quem deve ter a palavra final?",
        alternativas: [
            {
                texto: "Pessoas, com apoio da tecnologia e responsabilidade claramente definida.",
                afirmacao: "Você considera que a IA deve apoiar decisões humanas sem eliminar a responsabilidade de quem as toma."
            },
            {
                texto: "Sistemas avançados, quando houver evidências de que decidem melhor.",
                afirmacao: "Você está aberto a delegar decisões a sistemas avançados, desde que existam evidências sólidas, supervisão e mecanismos de responsabilização."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";
    caixaResultado.classList.remove("mostrar");
    areaJogo.classList.add("mostrar");

    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const pergunta = perguntas[atual];

    contadorPergunta.textContent =
        `CASO ${String(atual + 1).padStart(3, "0")} / ${String(perguntas.length).padStart(3, "0")}`;

    barraProgresso.style.width =
        `${(atual / perguntas.length) * 100}%`;

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = "> " + alternativa.texto;

        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + "\n\n";
            atual++;
            mostraPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    areaJogo.classList.remove("mostrar");
    caixaResultado.classList.add("mostrar");
    barraProgresso.style.width = "100%";

    textoResultado.textContent =
        "ANÁLISE DAS DECISÕES\n\n" +
        historiaFinal +
        "CONCLUSÃO DO SISTEMA\n\n" +
        "O futuro da inteligência artificial não está determinado. " +
        "Ele será moldado por escolhas individuais, decisões políticas, " +
        "responsabilidade empresarial e participação da sociedade.";
}

function reiniciarJogo() {
    caixaResultado.classList.remove("mostrar");
    areaJogo.classList.remove("mostrar");

    atual = 0;
    historiaFinal = "";
    barraProgresso.style.width = "0%";

    telaInicial.style.display = "";
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoNovamente.addEventListener("click", reiniciarJogo);


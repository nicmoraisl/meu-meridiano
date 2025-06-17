
const perguntas = [
    {
        pergunta: "O meridiano do estômago pertence a qual elemento?",
        opcoes: ["Terra", "Fogo", "Metal", "Água"],
        respostaCorreta: 0,
        imagem: "imagens/elemento-estomago.png"
    },
    {
        pergunta: "Qual o trajeto inicial do meridiano do estômago?",
        opcoes: ["Inicia na mão", "Inicia na cabeça", "Inicia no abdômen", "Inicia no pé"],
        respostaCorreta: 1,
        imagem: "imagens/trajeto-inicial.png"
    },
    {
        pergunta: "Qual ponto do meridiano do estômago é conhecido por tonificar Qi e sangue?",
        opcoes: ["E36 (Zusanli)", "E25 (Tianshu)", "E1 (Chengqi)", "E40 (Fenglong)"],
        respostaCorreta: 0,
        imagem: "imagens/ponto-E36.png"
    },
    {
        pergunta: "Qual ponto é indicado para eliminar fleuma no meridiano do estômago?",
        opcoes: ["E40 (Fenglong)", "E21 (Liangmen)", "E45 (Lidui)", "E25 (Tianshu)"],
        respostaCorreta: 0,
        imagem: "imagens/ponto-E40.png"
    },
    {
        pergunta: "Qual a função geral do meridiano do estômago?",
        opcoes: ["Promover a circulação de sangue", "Regular a digestão", "Controlar os pulmões", "Harmonizar o fígado"],
        respostaCorreta: 1,
        imagem: "imagens/funcao-estomago.png"
    },
    {
        pergunta: "Qual o horário de maior atividade energética no meridiano do estômago?",
        opcoes: ["7h às 9h", "9h às 11h", "11h às 13h", "13h às 15h"],
        respostaCorreta: 0,
        imagem: "imagens/horario-estomago.png"
    },
    {
        pergunta: "Qual emoção pode impactar o funcionamento do estômago segundo a Medicina Chinesa?",
        opcoes: ["Tristeza", "Preocupação", "Medo", "Alegria"],
        respostaCorreta: 1,
        imagem: "imagens/emocao-estomago.png"
    }
];

let perguntaAtual = 0;
let pontos = 0;

function mostrarPergunta() {
    let p = perguntas[perguntaAtual];
    document.getElementById("pergunta").textContent = p.pergunta;

    let opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";

    p.opcoes.forEach((opcao, index) => {
        let btn = document.createElement("button");
        btn.textContent = opcao;
        btn.onclick = () => escolherOpcao(index);
        opcoesDiv.appendChild(btn);
    });

    let img = document.getElementById("imagemPergunta");
    if (p.imagem) {
        img.src = p.imagem;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}

function escolherOpcao(indice) {
    let p = perguntas[perguntaAtual];
    if (indice === p.respostaCorreta) {
        pontos++;
    }
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById("quiz").innerHTML = `
        <h2>Você acertou ${pontos} de ${perguntas.length} perguntas!</h2>
        <button onclick="reiniciarQuiz()">Jogar novamente</button>
    `;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    mostrarPergunta();
}

window.onload = mostrarPergunta;

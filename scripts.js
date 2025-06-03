const perguntas = [
  {
    pergunta: "Qual é o número total de pontos no meridiano do estômago?",
    respostas: ["36", "45", "50"],
    correta: 1
  },
  {
    pergunta: "Em que lado do corpo o meridiano do estômago é localizado?",
    respostas: ["Anterior", "Posterior", "Lateral"],
    correta: 0
  },
  {
    pergunta: "Qual ponto é conhecido por fortalecer o Qi e o sangue?",
    respostas: ["E36 (Zusanli)", "E25 (Tianshu)", "E21 (Liangmen)"],
    correta: 0
  },
  {
    pergunta: "O meridiano do estômago pertence a qual elemento na teoria dos cinco elementos?",
    respostas: ["Madeira", "Fogo", "Terra"],
    correta: 2
  }
];

let indiceAtual = 0;
let containerPergunta = document.getElementById("pergunta");
let containerRespostas = document.getElementById("respostas");

function mostrarPergunta() {
  const p = perguntas[indiceAtual];
  containerPergunta.textContent = p.pergunta;
  containerRespostas.innerHTML = "";

  p.respostas.forEach((resposta, i) => {
    const btn = document.createElement("button");
    btn.textContent = resposta;
    btn.onclick = () => verificarResposta(i);
    containerRespostas.appendChild(btn);
  });
}

function verificarResposta(indiceEscolhido) {
  const correta = perguntas[indiceAtual].correta;
  if (indiceEscolhido === correta) {
    alert("✅ Correto!");
  } else {
    alert("❌ Incorreto!");
  }
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    alert("🏁 Fim do quiz! Parabéns!");
  }
}

mostrarPergunta();
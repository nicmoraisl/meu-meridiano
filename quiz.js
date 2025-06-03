
const quizData = [
  {
    question: "Qual o trajeto principal do meridiano do estômago?",
    options: ["Frontal do corpo", "Costas", "Braços", "Pernas"],
    answer: "Frontal do corpo"
  },
  {
    question: "Onde está localizado o ponto E36 (Zusanli)?",
    options: ["Braço", "Perna", "Pescoço", "Tórax"],
    answer: "Perna"
  },
  {
    question: "Qual é a função do ponto E25 (Tianshu)?",
    options: ["Aliviar dor de cabeça", "Regular intestinos", "Melhorar visão", "Fortalecer braços"],
    answer: "Regular intestinos"
  },
  {
    question: "Qual ponto é conhecido como 'Porta do Estômago'?",
    options: ["E21", "E36", "E40", "E25"],
    answer: "E21"
  },
  {
    question: "O meridiano do estômago começa em qual região?",
    options: ["Mão", "Pé", "Olho", "Tórax"],
    answer: "Olho"
  }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

function loadQuestion() {
  if (currentQuestion < quizData.length) {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `<h3>${q.question}</h3>`;
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      quizContainer.appendChild(btn);
    });
  } else {
    showResult();
  }
}

function checkAnswer(selected) {
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  loadQuestion();
}

function showResult() {
  quizContainer.innerHTML = '';
  resultContainer.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} perguntas.</h2>`;
}

loadQuestion();

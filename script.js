const questions = [
  {
    question: "Qual linguagem é usada para estilizar sites?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1
  },
  {
    question: "Quem criou o sistema operacional Linux?",
    answers: ["Bill Gates", "Steve Jobs", "Linus Torvalds", "Mark Zuckerberg"],
    correct: 2
  }
];

let currentQuestion = 0;

function showQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  const q = questions[currentQuestion];
  const title = document.createElement("h2");
  title.textContent = q.question;
  container.appendChild(title);

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    container.appendChild(btn);
  });
}

function checkAnswer(index) {
  const result = document.getElementById("result");
  const correct = questions[currentQuestion].correct;
  result.textContent = index === correct ? "Correto!" : "Errado!";
}

document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  document.getElementById("result").textContent = "";
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-container").innerHTML = "<h2>Fim do Quiz!</h2>";
    document.getElementById("next-btn").style.display = "none";
  }
};

showQuestion();
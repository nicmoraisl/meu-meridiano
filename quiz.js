
const quizData = [
  {question: "Qual o trajeto principal do meridiano do estômago?", options: ["Frontal do corpo", "Costas", "Braços", "Pernas"], answer: "Frontal do corpo"},
  {question: "Onde está localizado o ponto E36 (Zusanli) e qual sua principal função?", options: ["Braço, fortalece pulmões", "Perna, fortalece Qi e sangue", "Pescoço, melhora a visão", "Tórax, alivia tosse"], answer: "Perna, fortalece Qi e sangue"},
  {question: "Quais são as indicações clínicas do ponto E25 (Tianshu)?", options: ["Dor no peito", "Problemas digestivos", "Dor de cabeça", "Tensão muscular"], answer: "Problemas digestivos"},
  {question: "O que significa a função 'ponto de alarme' e qual ponto do estômago exerce esse papel?", options: ["Ponto doloroso, E25", "Ponto de diagnóstico, E36", "Ponto energético, E40", "Ponto emocional, E21"], answer: "Ponto doloroso, E25"},
  {question: "Qual o número total de pontos do meridiano do estômago?", options: ["45", "50", "36", "30"], answer: "45"},
  {question: "Qual a relação do meridiano do estômago com o elemento Terra na MTC?", options: ["Representa o Metal", "Não tem relação", "Responsável pela digestão e nutrição", "Equilibra emoções"], answer: "Responsável pela digestão e nutrição"},
  {question: "Quais são os efeitos terapêuticos do ponto E40 (Fenglong)?", options: ["Alivia tosse", "Remove fleuma", "Melhora visão", "Aumenta força"], answer: "Remove fleuma"},
  {question: "Como localizar o ponto E21 (Liangmen)?", options: ["2 cun acima do umbigo", "4 cun abaixo do joelho", "Na ponta do nariz", "Atrás da orelha"], answer: "2 cun acima do umbigo"},
  {question: "Qual ponto do meridiano do estômago é utilizado no tratamento de náuseas e vômitos?", options: ["E25", "E36", "E21", "E40"], answer: "E36"},
  {question: "Qual a função do ponto E44 (Neiting) no tratamento de dores de dente?", options: ["Reduz inflamação gengival", "Melhora visão", "Diminui ansiedade", "Aumenta energia"], answer: "Reduz inflamação gengival"},
  {question: "Por que o ponto E9 (Renying) deve ser utilizado com cuidado?", options: ["Próximo a artéria carótida", "Muito doloroso", "Pode causar insônia", "É difícil de localizar"], answer: "Próximo a artéria carótida"},
  {question: "Como o meridiano do estômago se conecta com os órgãos internos segundo a teoria Zang Fu?", options: ["Conecta-se diretamente ao coração", "Passa pelo pulmão", "Comunica-se com o estômago e baço", "Vai até os rins"], answer: "Comunica-se com o estômago e baço"},
  {question: "Qual a função do ponto E8 (Touwei) no tratamento de dores de cabeça?", options: ["Alivia cefaleia frontal", "Melhora tontura", "Aumenta a concentração", "Reduz enxaquecas severas"], answer: "Alivia cefaleia frontal"},
  {question: "Quais pontos do meridiano do estômago são frequentemente utilizados para tratar distúrbios gastrointestinais?", options: ["E8, E9", "E36, E25", "E40, E44", "E21, E44"], answer: "E36, E25"},
  {question: "Como o meridiano do estômago influencia as emoções segundo a MTC?", options: ["Relaciona-se ao medo", "Afeta a alegria", "Influencia a preocupação e ruminação", "Está ligado à raiva"], answer: "Influencia a preocupação e ruminação"}
];

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function buildQuiz() {
  quizContainer.innerHTML = '';
  quizData.forEach((currentQuestion, questionNumber) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionText = document.createElement('p');
    questionText.textContent = `${questionNumber + 1}. ${currentQuestion.question}`;
    questionDiv.appendChild(questionText);
    
    currentQuestion.options.forEach(option => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question${questionNumber}`;
      input.value = option;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });
    
    quizContainer.appendChild(questionDiv);
  });
}

function showResults() {
  let numCorrect = 0;

  quizData.forEach((currentQuestion, questionNumber) => {
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (document.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.answer) {
      numCorrect++;
    }
  });

  resultContainer.textContent = `Você acertou ${numCorrect} de ${quizData.length} perguntas.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

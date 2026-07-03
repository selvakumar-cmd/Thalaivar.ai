// ================================================
// THALAIVAR.AI — Fan Arena Logic
// ================================================

const QUIZ_QUESTIONS = [
  {
    question: "What was Superstar Rajinikanth's debut movie?",
    options: ["Apoorva Raagangal", "Moondru Mudichu", "Bairavi", "Mullum Malarum"],
    answer: 0
  },
  {
    question: "In which movie did he say: 'Naan oru thadava sonna, nooru thadava sonna madhiri'?",
    options: ["Baasha", "Muthu", "Padayappa", "Arunachalam"],
    answer: 2
  },
  {
    question: "What is the real name of Superstar Rajinikanth?",
    options: ["Sivaji Rao Gaekwad", "Venkatesh Prabhu", "Rajinikanth", "Shankaran"],
    answer: 0
  },
  {
    question: "Which 2010 movie featured him as 'Chitti' the robot?",
    options: ["2.0", "Enthiran", "Kochadaiiyaan", "Sivaji"],
    answer: 1
  },
  {
    question: "In which year was 'Baasha' released?",
    options: ["1992", "1994", "1995", "1997"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById('quizContainer');
  if (!container) return;
  
  if (currentQuestion >= QUIZ_QUESTIONS.length) {
    showResult();
    return;
  }
  
  const q = QUIZ_QUESTIONS[currentQuestion];
  
  container.innerHTML = `
    <div style="color: var(--gold-primary); font-size:0.9rem; margin-bottom:1rem; letter-spacing:2px; text-transform:uppercase;">
      Question ${currentQuestion + 1} of ${QUIZ_QUESTIONS.length}
    </div>
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `
        <div class="quiz-option" onclick="checkAnswer(${i})">${opt}</div>
      `).join('')}
    </div>
    <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()">Next Question ➡️</button>
  `;
}

function checkAnswer(selectedIndex) {
  const options = document.querySelectorAll('.quiz-option');
  if (options[0].classList.contains('correct') || options[0].classList.contains('wrong')) {
    return; // Already answered
  }
  
  const correctIndex = QUIZ_QUESTIONS[currentQuestion].answer;
  
  if (selectedIndex === correctIndex) {
    options[selectedIndex].classList.add('correct');
    score++;
    showToast("Correct Answer! 🎉", "✅");
  } else {
    options[selectedIndex].classList.add('wrong');
    options[correctIndex].classList.add('correct');
    showToast("Wrong Answer! 😅", "❌");
  }
  
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  renderQuestion();
}

function showResult() {
  const container = document.getElementById('quizContainer');
  
  let msg = "";
  if (score === QUIZ_QUESTIONS.length) msg = "True Thalaivar Fan! 👑";
  else if (score >= 3) msg = "Great Job! 🎉";
  else msg = "Need to rewatch the classics! 🎬";
  
  container.innerHTML = `
    <div style="font-size: 4rem; margin-bottom: 1rem;">🏆</div>
    <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Quiz Completed!</h2>
    <div class="score-display">${score} / ${QUIZ_QUESTIONS.length}</div>
    <p style="color: var(--text-secondary); margin: 1.5rem 0 2rem; font-size:1.2rem;">${msg}</p>
    <button class="btn btn-primary" onclick="startQuiz()">Play Again 🔄</button>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  startQuiz();
});

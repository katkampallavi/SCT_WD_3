const questions = [
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: 2
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Styling Syntax"
    ],
    answer: 1
  },
  {
    question: "Which HTML tag is used to display images?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    answer: 1
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "IBM"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionButtons.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.style.background = "rgba(255, 255, 255, 0.2)";
    btn.disabled = false;
  });
  nextBtn.style.display = "none";
}

function selectOption(selectedIndex) {
  const q = questions[currentQuestion];
  optionButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) {
      btn.style.background = "#00e676"; // correct - green
    } else if (i === selectedIndex && i !== q.answer) {
      btn.style.background = "#ff1744"; // wrong - red
    }
  });
  if (selectedIndex === q.answer) score++;
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hidden");
  quizBox.classList.remove("hidden");
  showQuestion();
}

showQuestion();

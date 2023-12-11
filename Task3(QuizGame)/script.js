const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello Text Makeup Language",
    b: "Hey Text Markup Language",
    c: "HyperText Makeup Language",
    d: "HyperText Markup Language",
    ans: "ans4",
  },
  {
    question: "Q2: What is internet?",
    a: "A network of interconnected local area networks",
    b: "A collection of unrelated computers",
    c: "Interconnection of wide area networks",
    d: "A single network",
    ans: "ans3",
  },
  {
    question: "Q3: Which of the following is an example of Bluetooth?",
    a: "wide area network",
    b: " virtual private network",
    c: "local area network",
    d: "personal area network",
    ans: "ans4",
  },
  {
    question: "Q4: How many layers are there in the ISO OSI reference model?",
    a: " 7",
    b: " 5",
    c: "8",
    d: "4",
    ans: "ans1",
  },
  {
    question:
      "Q5: How is a single channel shared by multiple signals in a computer network?",
    a: "multiplexing",
    b: " phase modulation",
    c: "analog modulation",
    d: "digital modulation",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};
loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};
submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h3>You scored ${score}/${quizDB.length}💡</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
    showScore.classList.remove("scoreArea");
  }
});
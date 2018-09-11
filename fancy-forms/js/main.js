//Questions Array

const questions = [
  { question: "Enter your first name" },
  { question: "Enter your last name" },
  { question: "Enter your email", pattern: /\S+@\S+\.\S+/ },
  { question: "Enter your password", type: "password" }
];

//Initialize Vars
//Transition Time
const shakeTime = 100;
const switchTime = 200;

//Init Position at Fist Question
let position = 0;

//Init DOM elements
const formBox = document.querySelector("#form-box");
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const inputGroup = document.querySelector("#input-group");
const inputField = document.querySelector("#input-field");
const inputLabel = document.querySelector("#input-label");
const inputProgress = document.querySelector("#input-progress");
const progress = document.querySelector("#progress-bar");

//Events
document.addEventListener("DOMContentLoaded", getQuestions);

//Functions
function getQuestion() {
  //get current question
  inputLabel.innerHTML = questions[position].question;
  //get current type
  inputField.type = questions[position].type || "text";
  //get current answer
  inputField.value = questions[position].answer || "";
  //focus on element
  inputField.focus();

  //set progress bar
  progress.style.width = (position * 100) / questions.length + "%";

  //add user icon or back arrow depending on the question
  prevBtn.className = position ? "fas fa-arrow-left" : "fas fa-user";

  showQuestion();
}

//display question to user
function showQuestion() {
  inputGroup.style.opacity = 1;
  inputProgress.style.transition = "";
  inputProgress.style.width = "100%";
}

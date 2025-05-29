let shuffledQuestions = [];

const start_btn = document.querySelector(".start-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz-box");
const timeCount = quiz_box.querySelector(".timer .timer-sec");
const timeLine = quiz_box.querySelector("header .time-line");
const timeOff = quiz_box.querySelector("header .time-text");

const countdownScreen = document.querySelector(".countdown-screen");
const countdownNumber = document.getElementById("countdown-number");

const option_list = document.querySelector(".option-list");
const quizBoxSection = quiz_box.querySelector("section");

start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  countdownScreen.classList.add("activeCountdown");
  quiz_box.classList.remove("activeQuiz");
  start_btn.classList.add("hidden");

  let countdown = 3;
  countdownNumber.textContent = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;

    if (countdown > 0) {
      countdownNumber.textContent = countdown;
    } else if (countdown === 0) {
      countdownNumber.textContent = "Go!";

      setTimeout(() => {
        clearInterval(countdownInterval);
        countdownScreen.classList.remove("activeCountdown");
        quiz_box.classList.add("activeQuiz");
        startQuiz();
      }, 500);
    }
  }, 1000);
};

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next-btn");
const result_box = document.querySelector(".result-box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");


restart_quiz.onclick = () => {
  result_box.classList.remove("activeResult");
  quiz_box.classList.add("activeQuiz");
  que_numb = 1;
  que_count = 0;
  timeValue = 15;
  widthValue = 0;
  userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  next_btn.style.display = "none";
  timeOff.textContent = "Time Left";
  document.body.style.backgroundColor = "var(--bg-color)"; 
};

quit_quiz.onclick = () => {
  window.location.reload();
  document.body.style.backgroundColor = "var(--bg-color)";
  start_btn.classList.remove("hidden");
};

next_btn.onclick = () => {
  if (que_count < shuffledQuestions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    console.log("Questions Completed");
    showResultBox();
  }
};

function showQuestions(index) {
  const que_text = document.querySelector(".que-text");
  const currentQ = shuffledQuestions[index];

  let que_tag = `<span>${index + 1}. ${currentQ.question}</span>`;
  let option_tag = currentQ.options
    .map((opt) => `<div class="option">${opt}<span></span></div>`)
    .join("");

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);

  let userAns = answer.textContent.trim();
  let correctAns = shuffledQuestions[que_count].answer.trim();

  let allOptions = option_list.children.length;

  answer.classList.add("selected-feedback");

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }

  setTimeout(() => {
    answer.classList.remove("selected-feedback");

    if (userAns === correctAns) {
      userScore += 1;
      answer.classList.add("correct");
      answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
      answer.classList.add("incorrect");
      answer.insertAdjacentHTML("beforeend", crossIcon);

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent.trim() === correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }
    }
    next_btn.style.display = "block";
  }, 400);
}

function showResultBox() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score-text");
  const body = document.body; 

  let message = "";

  if (userScore > 3) {
    message = "Fantastic job! You've aced it with";
    body.style.backgroundColor = "var(--excellent-score-bg)"; 
  } else if (userScore > 1) {
    message = "Nice effort! You got";
    body.style.backgroundColor = "var(--good-score-bg)"; 
  } else {
    message = "No worries! You scored";
    body.style.backgroundColor = "var(--low-score-bg)";
  }

  let scoreTag = `${message} ${userScore} out of ${shuffledQuestions.length} correct answers!`;
  scoreText.innerHTML = scoreTag;
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      timeOff.textContent = "Time Off";

      let correctAns = shuffledQuestions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }

      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.style.display = "block";
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total-que");
  let totalQuesCountTag ="<span><p>" + index + "</p>of<p>" + shuffledQuestions.length + "</p>Questions</span>";
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  quiz_box.classList.add("activeQuiz");

  shuffledQuestions = shuffle(questions).map((q) => {
    return {
      ...q,
      options: shuffle([...q.options]),
    };
  });

  que_count = 0;
  que_numb = 1;
  timeValue = 15;
  widthValue = 0;
  userScore = 0;

  showQuestions(que_count);
  queCounter(que_numb);
  startTimer(timeValue);
  startTimerLine(widthValue);
}

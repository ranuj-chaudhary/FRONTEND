// selectors

const startBtn = document.querySelector(".countdown__btn--start");
const pauseBtn = document.querySelector(".countdown__btn--pause");
const resetBtn = document.querySelector(".countdown__btn--reset");
const continueBtn = document.querySelector(".countdown__btn--continue");
const allInputs = document.querySelectorAll(".countdown__input");
const hourInput = document.querySelector(".countdown__hours");
const minutesInput = document.querySelector(".countdown__minutes");
const secondsInput = document.querySelector(".countdown__seconds");

// global variables
let hour;
let minutes;
let seconds;
let timerId;

// prefix zero for input value less than 10
allInputs.forEach((input) =>
  input.addEventListener("input", (e) => {
    const value = parseInt(e.target.value);
    e.target.value = value < 10 ? "0" + value : value;
  })
);

// Start Timer -- start
startBtn.addEventListener("click", (e) => {
  hour = parseInt(hourInput.value || 0);
  minutes = parseInt(minutesInput.value || 0);
  seconds = parseInt(secondsInput.value || 0);

  if (hour === 0 && minutes === 0 && seconds === 0) {
    return;
  }

  const id = setInterval(() => {
    if (hour > 0 && minutes === 0) {
      hour = hour - 1;
      minutes = 59;
      seconds = 59;
      hourInput.value = hour < 10 ? "0" + hour : hour;
      minutesInput.value = minutes < 10 ? "0" + minutes : minutes;
      secondsInput.value = seconds < 10 ? "0" + seconds : seconds;
    } else if (minutes > 0 && seconds === 0) {
      minutes = minutes - 1;
      seconds = 59;
      minutesInput.value = minutes < 10 ? "0" + minutes : minutes;
      secondsInput.value = seconds < 10 ? "0" + seconds : seconds;
    } else {
      seconds = seconds - 1;
      secondsInput.value = seconds < 10 ? "0" + seconds : seconds;
    }
    if (minutes === 0 && minutes == 0 && seconds == 0) {
      resetTimer(hour, minutes, seconds, timerId);
    }
  }, 1000);

  timerId = id;
  // toggle hidden class for timer buttons
  startBtn.classList.add("countdown__btn--hidden");
  pauseBtn.classList.remove("countdown__btn--hidden");

  // disable input
  disableInput();
});
// Start Timer -- end'

// Reset timer -- start
resetBtn.addEventListener("click", () => {
  resetTimer(hour, minutes, seconds, timerId);
});

// Reset timer -- end

// Pause timer --- start
pauseBtn.addEventListener("click", (e) => {
  clearInterval(timerId);
  startBtn.classList.remove("countdown__btn--hidden");
  pauseBtn.classList.add("countdown__btn--hidden");
});
// Pause timer --- end

// helpers
function resetTimer(hour, minutes, seconds, id) {
  // empty input value
  hourInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";

  // toggle hidden class for timer buttons
  startBtn.classList.remove("countdown__btn--hidden");
  pauseBtn.classList.add("countdown__btn--hidden");

  // enable input
  enableInput();

  // stop timer
  clearInterval(id);
}

function disableInput() {
  hourInput.setAttribute("disabled", true);
  minutesInput.setAttribute("disabled", true);
  secondsInput.setAttribute("disabled", true);
}

function enableInput() {
  hourInput.removeAttribute("disabled");
  minutesInput.removeAttribute("disabled");
  secondsInput.removeAttribute("disabled");
}

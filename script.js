const nextBtn = document.getElementById("nextBtn");
const input = document.getElementById("questionInput");
const optionsDiv = document.getElementById("options");
const resultDiv = document.getElementById("result");
const questionText = document.getElementById("questionText");

let score = 0;
let step = 1;

nextBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Type something first.");
    return;
  }

  input.classList.add("hidden");
  nextBtn.classList.add("hidden");

  askTiredness();
});

function askTiredness() {
  questionText.textContent = "How tired are you right now?";
  showOptions([
    { text: "Very tired", value: -2 },
    { text: "A little tired", value: -1 },
    { text: "Fine", value: 1 }
  ], askUrgency);
}

function askUrgency() {
  questionText.textContent = "How urgent is this?";
  showOptions([
    { text: "Can wait", value: -1 },
    { text: "Somewhat urgent", value: 1 },
    { text: "Very urgent", value: 2 }
  ], showResult);
}

function showOptions(options, nextStep) {
  optionsDiv.innerHTML = "";
  optionsDiv.classList.remove("hidden");

  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => {
      score += opt.value;
      optionsDiv.classList.add("hidden");
      nextStep();
    };
    optionsDiv.appendChild(btn);
  });
}

function showResult() {
  resultDiv.classList.remove("hidden");

  if (score <= -2) {
    resultDiv.textContent =
      "Take a break or sleep. Forcing this will backfire.";
  } else if (score <= 1) {
    resultDiv.textContent =
      "Delay it slightly. Do something light, then decide again.";
  } else {
    resultDiv.textContent =
      "Do it now. You’re capable and it actually matters.";
  }
}

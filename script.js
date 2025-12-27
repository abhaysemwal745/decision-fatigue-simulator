const startBtn = document.getElementById("startBtn");
const input = document.getElementById("questionInput");
const result = document.getElementById("result");

startBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("At least type something.");
    return;
  }

  const answers = [
    "Sleep. You’re not thinking clearly.",
    "Do it now. Future you will complain anyway.",
    "Skip it. This isn’t that important.",
    "Take a break first. Then decide."
  ];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  result.textContent = randomAnswer;
  result.classList.remove("hidden");
});

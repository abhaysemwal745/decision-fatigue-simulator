const nextBtn = document.getElementById("nextBtn");
const input = document.getElementById("questionInput");
const optionsDiv = document.getElementById("options");
const resultDiv = document.getElementById("result");
const questionText = document.getElementById("questionText");

let score = 0;

nextBtn.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Type something first.");
        return;
    }

    questionText.textContent = "How tired are you right now?";
    input.classList.add("hidden");
    nextBtn.classList.add("hidden");

    showOptions([
        { text: "Very tired", value: -2 },
        { text: "A little tired", value: -1 },
        { text: "Fine", value: 1 }
    ]);
});

function showOptions(options) {
    optionsDiv.innerHTML = "";
    optionsDiv.classList.remove("hidden");

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.text;
        btn.onclick = () => {
            score += opt.value;
            showResult();
        };
        optionsDiv.appendChild(btn);
    });
}

function showResult() {
    optionsDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    if (score <= -1) {
        resultDiv.textContent = "Sleep or take a break. Your brain is done.";
    } else {
        resultDiv.textContent = "Do it now. You have enough energy.";
    }
}

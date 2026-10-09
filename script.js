let count = 0;

const countDisplay = document.querySelector("#count");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");

function updateDisplay() {
  countDisplay.textContent = count;
}

decreaseButton.addEventListener("click", () => {
  count -= 1;
  updateDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

increaseButton.addEventListener("click", () => {
  count += 1;
  updateDisplay();
});

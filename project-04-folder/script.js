const display = document.querySelector('input[name="display"]');
const historyList = document.getElementById("history-list");
let history = [];

// Update display value
function appendToDisplay(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    if (expression !== "") {
      display.value = Number(result).toLocaleString("en-US"); // ✅ Add this line
      updateHistory(expression, result);
    }
  } catch (error) {
    display.value = "Error";
  }
}

// Update and render history
function updateHistory(expression, result) {
  const entry = `${expression} = ${result}`;
  history.unshift(entry);
  if (history.length > 10) history.pop(); // Limit to last 10
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById("theme-btn");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    btn.textContent = "🌞";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    btn.textContent = "🌙";
  }
}

// Set default theme (optional)
window.onload = () => {
  document.body.classList.add("dark-theme");
};

// Clear history with fade-out effect
document.getElementById("clear-history").addEventListener("click", () => {
  const listItems = historyList.querySelectorAll("li");
  listItems.forEach((li, index) => {
    li.classList.add("fade-out");
    setTimeout(() => {
      if (index === listItems.length - 1) {
        history = [];
        renderHistory();
      }
    }, 500); // match with CSS fade duration
  });

  // Handle case when no items are present
  if (listItems.length === 0) {
    history = [];
    renderHistory();
  }
});

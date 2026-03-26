const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if ((key >= "0" && key <= "9") || key === ".") {
    appendToDisplay(key);
    return;
  }

  if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
    return;
  }

  if (key === "Enter" || key === "=") {
    e.preventDefault(); // prevents form-like submit behavior
    calculate();
    return;
  }

  if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
    return;
  }

  // Escape or c/C to clear
  if (key === "Escape" || key === "c" || key === "C") {
    clearDisplay();
    return;
  }
});

const angle = document.getElementById("angle");
const gradientBox = document.getElementById("gradient-box");
const cssCode = document.getElementById("css-code");
const copyBtn = document.getElementById("copy-css");
const presets = document.querySelectorAll(".presets button");
const colorSelectors = document.getElementById("colorSelectors");
const colorCountInput = document.getElementById("colorCount");

let colorInputs = [];

// Function to generate color inputs dynamically
function generateColorInputs(count) {
  colorSelectors.innerHTML = ""; // Clear existing color inputs
  colorInputs = [];

  for (let i = 1; i <= count; i++) {
    const colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.value = "#ffffff";
    colorInput.id = `color${i}`;
    colorSelectors.appendChild(colorInput);
    colorInputs.push(colorInput);

    colorInput.addEventListener("input", updateGradient);
  }

  updateGradient();
}

// Function to update gradient
function updateGradient() {
  const colors = colorInputs.map(input => input.value).join(", ");
  const gradient = `linear-gradient(${angle.value}deg, ${colors})`;
  gradientBox.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

// Copy CSS to clipboard
function copyToClipboard() {
  const tempInput = document.createElement("textarea");
  tempInput.value = cssCode.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("CSS copied to clipboard!");
}

// Presets
presets.forEach(button => {
  button.addEventListener("click", () => {
    gradientBox.style.background = button.getAttribute("data-gradient");
    cssCode.textContent = `background: ${button.getAttribute("data-gradient")};`;
  });
});

// Event listener for color count
colorCountInput.addEventListener("input", function () {
  generateColorInputs(this.value);
});

copyBtn.addEventListener("click", copyToClipboard);

// Initial setup
generateColorInputs(4);
angle.addEventListener("input", updateGradient);

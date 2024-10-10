const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const angle = document.getElementById("angle");
const gradientBox = document.getElementById("gradient-box");
const cssCode = document.getElementById("css-code");
const copyBtn = document.getElementById("copy-css");
const presets = document.querySelectorAll(".presets button");

function updateGradient() {
  const gradient = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
  gradientBox.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

function copyToClipboard() {
  const tempInput = document.createElement("textarea");
  tempInput.value = cssCode.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("CSS copied to clipboard!");
}

copyBtn.addEventListener("click", copyToClipboard);

presets.forEach(button => {
  button.addEventListener("click", () => {
    gradientBox.style.background = button.getAttribute("data-gradient");
    cssCode.textContent = `background: ${button.getAttribute("data-gradient")};`;
  });
});

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
color3.addEventListener("input", updateGradient);
color4.addEventListener("input", updateGradient);
angle.addEventListener("input", updateGradient);

updateGradient();

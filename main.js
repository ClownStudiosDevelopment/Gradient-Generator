const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const angle = document.getElementById("angle");
const gradientBox = document.getElementById("gradient-box");
const cssCode = document.getElementById("css-code");

function updateGradient() {
  const gradient = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
  gradientBox.style.background = gradient;
  cssCode.textContent = `background: ${gradient};`;
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
angle.addEventListener("input", updateGradient);

updateGradient();

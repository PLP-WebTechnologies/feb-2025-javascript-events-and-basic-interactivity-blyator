const funButton = document.getElementById("funButton");
let clickCount = 0;
funButton.addEventListener("click", () => {
  clickCount++;
  funButton.style.backgroundColor = `hsl(${(clickCount * 50) % 360}, 70%, 50%)`;
  funButton.textContent = `Clicked`;
});

const form = document.getElementById("signupForm");
const inputs = form.querySelectorAll("input");
const validateField = (input) => {
  const error = document.getElementById(`${input.id}Error`);
  let valid = true;
  if (input.value.trim() === "") {
    valid = false;
    error.textContent = `${
      input.id.charAt(0).toUpperCase() + input.id.slice(1)
    } is required`;
  } else if (
    input.id === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)
  ) {
    valid = false;
    error.textContent = "Please enter a valid email";
  } else if (input.id === "password" && input.value.length < 8) {
    valid = false;
    error.textContent = "Password must be at least 8 characters";
  }
  error.classList.toggle("show", !valid);
  input.classList.toggle("success", valid);
  return valid;
};
inputs.forEach((input) => {
  input.addEventListener("input", () => validateField(input));
});
form.addEventListener("submit", () => {
  let valid = true;
  inputs.forEach((input) => {
    if (!validateField(input)) valid = false;
  });
  if (valid) alert("submitted successfully!");
});

let slideIndex = 0;
function changeSlide(n) {
  const slides = document.getElementsByClassName("slide");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  for (let slide of slides) slide.classList.remove("active");
  slides[slideIndex].classList.add("active");
}

function openTab(tabNumber) {
  const buttons = document.getElementsByClassName("tab-button");
  const contents = document.getElementsByClassName("tab-content");
  for (let btn of buttons) btn.classList.remove("active");
  for (let content of contents) content.classList.remove("active");
  buttons[tabNumber - 1].classList.add("active");
  document.getElementById(`tab${tabNumber}`).classList.add("active");
}

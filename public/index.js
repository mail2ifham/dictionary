// document.querySelector(".dropdownButton").innerHTML =text;
// handling sounds
function playSound(sound) {
  const paly = new Audio(sound);
  paly.play();
  console.log(sound);
}

// font change function
const listButtons = document.querySelectorAll(".list-btn");
listButtons.forEach((listButton) => {
  listButton.addEventListener("click", (e) => {
    const fontValue = e.target.value;
    const text = e.target.innerHTML;
    console.log(fontValue);
    document.querySelector("body").style.fontFamily = fontValue;
    document.querySelector(".dropdownButton").innerHTML = text;
    document.querySelector(".dropdown").classList.remove("show-dropdown");
  });
  listButton.addEventListener("mouseover", dropdown);
  listButton.addEventListener("mouseleave", dropdown);


});

// dark mode function
function darkMode() {
  const buttonElement = document.querySelector("#darkModeBtn");
  const bodyElement = document.querySelector("body").classList;
  const buttonElementDropdown = document.querySelector(".dropdown").classList;
  bodyElement.toggle("dark-mode");
  buttonElementDropdown.toggle("dark-mode");
  bodyElement.contains("dark-mode")
    ? (buttonElement.innerHTML = "Light Mode")
    : (buttonElement.innerHTML = "Dark Mode");
}

// dropdown function
function dropdown(e) {
  e.type === "mouseover"
    ? document.querySelector(".dropdown").classList.add("show-dropdown")
    : document.querySelector(".dropdown").classList.remove("show-dropdown");
}

// dropdown button handling
document
  .querySelector(".dropdownButton")
  .addEventListener("mouseover", dropdown);
document
  .querySelector(".dropdownButton")
  .addEventListener("mouseleave", dropdown);


  

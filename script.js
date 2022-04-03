let bg = document.getElementById("bg");
let input = document.getElementById("input");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  if (input.value) {
    bg.style.backgroundImage = "url("+ input.value + ")";
    input.value = ""
  } else {
    alert("Please, enter image url!");
  }
});

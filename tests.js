const change = document.getElementById("change");
let hex = document.getElementById("hexa");
let hexColor
const copied = document.getElementById("message");

let isChanging = false;

change.addEventListener("click", () => {
 changeBg()
}); 


function changeBg() {
  var rcolor = Math.round(Math.random() * 255).toString(16);
  var gcolor = Math.round(Math.random() * 255).toString(16);
  var bcolor = Math.round(Math.random() * 255).toString(16);
  hex.textContent = "Color: #" + rcolor + gcolor + bcolor;
  hex.style.color = "#f1f1f1";
  hex.classList.remove("display");
  hexColor = `#${rcolor}${gcolor}${bcolor}`;
  const body = document.querySelector("body");
  body.style.backgroundColor = `#${rcolor}${gcolor}${bcolor}`;
}
function copyColor(){
  navigator.clipboard.writeText(hexColor);
  copied.textContent = "Copied"
  setTimeout(() => {
    copied.textContent = ""
  }, 500)
  
}
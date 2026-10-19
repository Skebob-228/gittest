document.body.style.background = "grey";
let variable = document.getElementById("variable");
variable.style.background = "blue";

let button = document.getElementById("button1");
button.onclick = function(){
    alert("lolol");
};

let button2 = document.getElementById("button2");

function showmsg () {
    alert('lol2');
};

console.log(button2.getAttribute("id"));

button2.setAttribute("hidden", "")

button2.removeAttribute("hidden")

console.log(button2.hasAttribute("id"))

button2.addEventListener("click", showmsg);

let div = document.createElement("div");
div.innerHTML = "test"
let div2 = document.createElement("div");
div2.innerHTML = "test2"

document.body.appendChild(div)
document.body.insertBefore(div, variable)

variable.append(div)
variable.prepend(div)
variable.before(div)
variable.after(div)
button.remove()
let lololo = document.getElementById("test2")
lololo.replaceWith(div2)

document.body.replaceChild(div, variable)
document.body.removeChild(button2)
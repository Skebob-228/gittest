let button = document.getElementById('button1')
let Display = document.getElementById('Display')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let button7 = document.getElementById('button7')
let button8 = document.getElementById('button8')
let button9 = document.getElementById('button9')
let button0 = document.getElementById('button0')
let plusbutton = document.getElementById('plusbutton')
let equalbutton = document.getElementById('equalbutton')
let z1 = button.textContent
let z2 = button2.textContent
let z3
let z4
let z5
let z6
let z7
let z8
let z9
let z0
let final_num = console.log
let a = 5
let but1 =""
let but2 =""
let result

function clickbutton () {
    
    Display.textContent = 'Display' 
}

//button.addEventListener("click", clickbutton)
//if (a == 5) {
//    console.log(button.textContent)
//}

function CheckButton (button) {
    if (but1==""&& but2==""){
        return
    }
    result = but1 + but2
    Display.textContent = result

}
function GetButton (button) {
 
}


function calclogic () {
    Display.textContent = '1'
}
button.addEventListener("click", calclogic)

function calclogic2 () {
    Display.textContent = '2'
}
button2.addEventListener("click", calclogic2)

function calclogic3 () {
    Display.textContent = '+'
}
plusbutton.addEventListener("click", calclogic3)

function calclogic4 () {
    button = document.getElementById('button1')
    button2 = document.getElementById('button2')
    Display.textContent = final_num
}
equalbutton.addEventListener("click", calclogic4)
console.log(button.textContent)
console.log("ne snaju")
console.log(1+2)

plusbutton.addEventListener("click", calclogic3)

function rechlog () {
    console.log(button.textContent)
}

function z1click () {
button.textContent = z1
}
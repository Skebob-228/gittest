let form = document.getElementById("form1") // первый способ let form2 = document.forms["form1"] // второй способ let form3 = document.form1 // третий способ

let input = form.elements["nameInput"] // получили элемент формы

let contentInput
 function getInput (param) {
 //    form.reset() 
     contentInput = param.TextContent 
    }

button1.addEventListener("click", getInput)
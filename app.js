const calInput = document.getElementById('cal-input');

function getNum(number){
    calInput.value += number;
}

function calculate(){
    const expression = calInput.value
    calInput.value = eval(expression)
}

function cancelAll(){
    calInput.value = ''
}

function clearOne(){
    const expression = calInput.value
    calInput.value = calInput.value.slice(0,(expression.length-1))
}
let calcDisplay = document.calc.textInput;

// Clear button
document.querySelector(".clearBtn").addEventListener("click", event => {
    calcDisplay.value = '';
})

// Number and operation buttons
document.querySelectorAll(".numBtn").forEach(item => {
    item.addEventListener("click", event => {
        if(calcDisplay.value.substr(0) === '') { 
            if(item.value === '/' || item.value === '*') {
            }
            else {
                calcDisplay.value += item.value;
            }
        }else if (calcDisplay.value.substr(-1) === '*' ||
                  calcDisplay.value.substr(-1) === '-' ||
                  calcDisplay.value.substr(-1) === '/' ||
                  calcDisplay.value.substr(-1) === '+'){
            if(item.value === '/' || item.value === '*' ||
               item.value === '+' || item.value === '-') {
            }
            else {
                calcDisplay.value += item.value;
            }          
        }else {
            calcDisplay.value += item.value;
        }  
    })
})

// alertify
alertify.defaults.transition = "slide";

// Equal button
document.querySelector(".resultBtn").addEventListener("click", result); 

// Result
function result() {
    let lastPosition = calcDisplay.value.substr(-1);

    if(lastPosition === '-' || lastPosition === '+' ||
       lastPosition === '/' || lastPosition === '*') { 
        console.log("Operação inválida...");
    } else {
        let calcResult = eval(calcDisplay.value).toFixed(2);
        // alert(calcDisplay.value + ' = ' + calcResult); 
        alertify.alert(
            'Resultado do Histórico da Calculadora',
             calcDisplay.value + ' = ' + calcResult);
        calcDisplay.value = calcResult;
    }
}

// Operadores
function operators() {
}

//Teclado
document.querySelector("body").addEventListener("keydown", event => {
   
    // ABNT2
    switch (event.keyCode) {
        case 56: // '*'
            if (event.shiftKey) {
                if(calcDisplay.value.substr(0) === ''){
                }
                else if (calcDisplay.value.substr(-1) === '*' ||
                         calcDisplay.value.substr(-1) === '-' ||
                         calcDisplay.value.substr(-1) === '/' ||
                         calcDisplay.value.substr(-1) === '+'){
                } else {
                    calcDisplay.value += '*';
                }
            } 
            break;
        case 106: // '*'
            if(calcDisplay.value.substr(0) === ''){
            }else if (calcDisplay.value.substr(-1) === '*' ||
                      calcDisplay.value.substr(-1) === '-' ||
                      calcDisplay.value.substr(-1) === '/' ||
                      calcDisplay.value.substr(-1) === '+'){
            } else {
                calcDisplay.value += '*';
            }
            break;
        case 187: // '+'
            if (event.shiftKey) {
                if (calcDisplay.value.substr(-1) === '*' ||
                    calcDisplay.value.substr(-1) === '-' ||
                    calcDisplay.value.substr(-1) === '/' ||
                    calcDisplay.value.substr(-1) === '+'){
                } else {
                    calcDisplay.value += '+';
                }
            } 
            break;
        case 107: // '+'
            if (calcDisplay.value.substr(-1) === '*' ||
                calcDisplay.value.substr(-1) === '-' ||
                calcDisplay.value.substr(-1) === '/' ||
                calcDisplay.value.substr(-1) === '+'){
            } else {
                calcDisplay.value += '+';
            }
            break;
    }
    
    // key to string
    switch(event.key.toString()) {
        case '9':
            calcDisplay.value += '9';
            break;
        case '8':
            calcDisplay.value += '8';
            break;
        case '7':
            calcDisplay.value += '7';
            break;
        case '6':
            calcDisplay.value += '6';
            break;
        case '5':
            calcDisplay.value += '5';
            break;
        case '4':
            calcDisplay.value += '4';
            break;
        case '-':
            if (calcDisplay.value.substr(-1) === '*' ||
                calcDisplay.value.substr(-1) === '-' ||
                calcDisplay.value.substr(-1) === '/' ||
                calcDisplay.value.substr(-1) === '+'){
            } else {
                calcDisplay.value += '-';
            }
            break;
        case '3':
            calcDisplay.value += '3';
            break;
        case '2':
            calcDisplay.value += '2';
            break;
        case '1':
            calcDisplay.value += '1';
            break;
        case '0':
            calcDisplay.value += '0';
            break;
        case '=':
            result();
            break;
        case 'Enter':
            event.preventDefault();
            result();
            break;
        case 'Esc':
        case 'Escape':
        case 'Delete':
            calcDisplay.value = '';
            break;
        case '/':
            if(calcDisplay.value.substr(0) === ''){
            }
            else if (calcDisplay.value.substr(-1) === '*' ||
                     calcDisplay.value.substr(-1) === '-' ||
                     calcDisplay.value.substr(-1) === '/' ||
                     calcDisplay.value.substr(-1) === '+'){
            } else {
                calcDisplay.value += '/';
            }
            break;
        default:
            break;
    } 
})

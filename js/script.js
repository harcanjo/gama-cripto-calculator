// Clear button
document.querySelector(".clearBtn").addEventListener("click", event => {
    document.calc.textInput.value = '';
})

// Number and operation buttons
document.querySelectorAll(".numBtn").forEach(item => {
    item.addEventListener("click", event => {
        if(calc.textInput.value.substr(0) === '') { 
            if(item.value === '/' || item.value === '*') {
            }
            else {
                document.calc.textInput.value += item.value;
            }
        }else if (document.calc.textInput.value.substr(-1) === '*' ||
                  document.calc.textInput.value.substr(-1) === '-' ||
                  document.calc.textInput.value.substr(-1) === '/' ||
                  document.calc.textInput.value.substr(-1) === '+'){
            if(item.value === '/' || item.value === '*' ||
                item.value === '+' || item.value === '-') {
            }
            else {
                document.calc.textInput.value += item.value;
            }          
        }else {
            document.calc.textInput.value += item.value;
        }  
    })
})

// Equal button
document.querySelector(".resultBtn").addEventListener("click", result); 

// Result
function result() {
    let finn = calc.textInput.value.substr(-1);

    if(finn === '-' || finn === '+' || finn === '/' || finn === '*') { 
        console.log("inválida...");
    } else {
        alert(document.calc.textInput.value + ' = ' + (eval(calc.textInput.value)).toFixed(2));
        document.calc.textInput.value = (eval(calc.textInput.value)).toFixed(2);
    }
}

// Operadores
function operators() {

}

//Teclado
document.querySelector(".container").addEventListener("keydown", event => {
   
    // ABNT2
    switch (event.keyCode) {
        case 56: // '*'
            if (event.shiftKey) {
                if(document.calc.textInput.value.substr(0) === ''){
                }
                else if (document.calc.textInput.value.substr(-1) === '*' ||
                        document.calc.textInput.value.substr(-1) === '-' ||
                        document.calc.textInput.value.substr(-1) === '/' ||
                        document.calc.textInput.value.substr(-1) === '+'){
                } else {
                    document.calc.textInput.value += '*';
                }
            } 
            break;
        case 106:
            if(document.calc.textInput.value.substr(0) === ''){
            }else if (document.calc.textInput.value.substr(-1) === '*' ||
                     document.calc.textInput.value.substr(-1) === '-' ||
                     document.calc.textInput.value.substr(-1) === '/' ||
                     document.calc.textInput.value.substr(-1) === '+'){
            } else {
                document.calc.textInput.value += '*';
            }
            break;
        case 187:
            if (event.shiftKey) {
                if (document.calc.textInput.value.substr(-1) === '*' ||
                    document.calc.textInput.value.substr(-1) === '-' ||
                    document.calc.textInput.value.substr(-1) === '/' ||
                    document.calc.textInput.value.substr(-1) === '+'){
                } else {
                    document.calc.textInput.value += '+';
                }
            } 
            break;
        case 107:
            if (document.calc.textInput.value.substr(-1) === '*' ||
                document.calc.textInput.value.substr(-1) === '-' ||
                document.calc.textInput.value.substr(-1) === '/' ||
                document.calc.textInput.value.substr(-1) === '+'){
            } else {
                document.calc.textInput.value += '+';
            }
            break;
    }
    
    // key to string
    switch(event.key.toString()) {
        case '9':
            document.calc.textInput.value += '9';
            break;
        case '8':
            document.calc.textInput.value += '8';
            break;
        case '7':
            document.calc.textInput.value += '7';
            break;
        case '6':
            document.calc.textInput.value += '6';
            break;
        case '5':
            document.calc.textInput.value += '5';
            break;
        case '4':
            document.calc.textInput.value += '4';
            break;
        case '-':
            if (document.calc.textInput.value.substr(-1) === '*' ||
                document.calc.textInput.value.substr(-1) === '-' ||
                document.calc.textInput.value.substr(-1) === '/' ||
                document.calc.textInput.value.substr(-1) === '+'){
            } else {
                document.calc.textInput.value += '-';
            }
            break;
        case '3':
            document.calc.textInput.value += '3';
            break;
        case '2':
            document.calc.textInput.value += '2';
            break;
        case '1':
            document.calc.textInput.value += '1';
            break;
        case '0':
            document.calc.textInput.value += '0';
            break;
        case '=':
            result();
            break;
        case 'Enter':
            event.preventDefault();
            break;
        case 'Esc':
        case 'Escape':
        case 'Delete':
            document.calc.textInput.value = '';
            break;
        case '/':
            if(document.calc.textInput.value.substr(0) === ''){
            }
            else if (document.calc.textInput.value.substr(-1) === '*' ||
                document.calc.textInput.value.substr(-1) === '-' ||
                document.calc.textInput.value.substr(-1) === '/' ||
                document.calc.textInput.value.substr(-1) === '+'){
            } else {
                document.calc.textInput.value += '/';
            }
            break;
        default:
            break;
    } 
})

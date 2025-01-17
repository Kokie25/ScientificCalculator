const display = document.getElementById('display');



//append each input to the display
function appendToDisplay(input){
    display.value += input;
}


//clear the display 
function clearDisplay(){
    display.value = '';
}


//delete each value displayed
function deleteDisplay(){
    display.value = display.value.slice(0, -1);
}


//calculate the display
function calculate() {
    try {
        //The Function constructor creates a new function with the given code as its body.
        //The return keyword ensures the result of the calculation is returned.
        const result = new Function(`return ${display.value}`)();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function pi(){
    display.value += Math.PI;
}



function calculateTrig(type) {
    const angleInDegrees = parseInt(display.value);
    
    if (isNaN(angleInDegrees)) {
        display.value = 'Error';
        return;
    }

    // Convert angle to radians
    const angleInRadians = (angleInDegrees * Math.PI) / 180;

    // Perform the requested trigonometric calculation
    switch (type) {
        case 'sin':
            display.value = Math.sin(angleInRadians).toFixed(5);;
            break;
        case 'si':
            display.value = Math.sign(parseFloat(display.value).toFixed(0));
            break;
        case 'cos':
            display.value = Math.cos(angleInRadians).toFixed(5);
            break;
        case 'log10':
            display.value = Math.log10(parseFloat(display.value)).toFixed(3);
            break;
        case 'tan':
            display.value = Math.tan(angleInRadians).toFixed(5);
            break;
        case 'abs':
            display.value = Math.abs(parseFloat(display.value));
            break;
        case 'log':
            display.value = Math.log(parseFloat(display.value)).toFixed(5);
            break;
        case 'log2':
            display.value = Math.log2(parseFloat(display.value)).toFixed(5);
            break;
        case'rnd':
            display.value = Math.round(parseFloat(display.value));
            break;
        case'√':
            display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
            break;
        case '%':
            display.value = (parseFloat(display.value) / 100);
            break;
        case 'max':
            const numbers = display.value.split(',')
                .map(num => parseFloat(num.trim()))
                .filter(num => !isNaN(num)); 
        
            if (numbers.length === 0) {
                display.value = "Error: No valid numbers provided";
            } else {
                display.value = Math.max(...numbers);
            }
            break;
        case 'min':
            const number = display.value.split(',')
                .map(num => parseFloat(num.trim()))
                .filter(num => !isNaN(num)); 
        
            if (number.length === 0) {
                display.value = "Error: No valid numbers provided";
            } else {
                display.value = Math.min(...number);
            }
            break;
        default:
            display.value = 'Error'; // Invalid function type
            break;
    }
    
}


function calculatePower(type){
    switch(type){
        case 'x²':
            display.value = Math.pow(parseFloat(display.value), 2).toFixed(0);
            break;
        case 'x3':
            display.value = Math.pow(parseFloat(display.value), 3).toFixed(0);
            break;
        case 'ex':
            display.value = Math.exp(parseFloat(display.value)).toFixed(5);
            break;
        default:
            display.value = 'Error'; 
            break;
    }
}








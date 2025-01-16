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
        case 'cos':
            display.value = Math.cos(angleInRadians).toFixed(5);
            break;
        case 'tan':
            display.value = Math.tan(angleInRadians).toFixed(5);
            break;
        default:
            display.value = 'Error'; // Invalid function type
            break;
    }
    
}


function calculateSquare(){
    display.value = Math.pow(parseFloat(display.value), 2).toFixed(5);
}

console.log(calculateSquare(2,2));
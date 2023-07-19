const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstVal = null;
let operator = null;
let waitForSecond = false;

updateDisplay();

function updateDisplay()
{
    display.value = displayValue;
}

keys.addEventListener('click', function(e){
    const element = e.target;

    if(!element.matches('button')) return;

    if(element.classList.contains('operator'))
    {
        handleOperator(element.value);
        updateDisplay();
        return;
    }


    if(element.classList.contains('decimal'))
    {
        inputDecimal();
        updateDisplay();
        return;
    }


    if(element.classList.contains('clear'))
    {
        clear();
        updateDisplay();
        return;
    }




    inputNumber(element.value);
    updateDisplay();
});


function inputNumber(number)
{
    if(waitForSecond){
        displayValue = number;
        waitForSecond = false;
    }else{
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    
}


function inputDecimal(){
    if(!displayValue.includes('.'))
    {
        displayValue += '.';
    }
}

function clear()
{
    displayValue = '0';
}

function handleOperator(inputOperator)
{
    const value = parseFloat(displayValue);

    if(operator && waitForSecond){
        operator = inputOperator;
        return;
    }

    if(firstVal === null)
    {
        firstVal = value;
    }else if(operator)
    {
        const result = calculate(firstVal,value,operator);
        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstVal = result;
    }

    waitForSecond = true;
    operator = inputOperator;
}

function calculate(first, second, operator)
{
    if(operator === '+')
    {
        return first + second; 
    }
    else if(operator === '-')
    {
        return first - second;
    }
    else if(operator === '*')
    {
        return first * second;
    }
    else if(operator === '/')
    {
        return first / second;
    }

    return second;
}


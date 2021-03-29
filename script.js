const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumValue = (number)=>{
  // If current dispaly value is 0, weant to replace it, if not, add number
  const displayValue = calculatorDisplay.textContent;
  // Tierny condition
  calculatorDisplay.textContent = displayValue === '0' ? number: displayValue + number;
}

const addDecimal = ()=>{
  // If no decimal, add one
  if(!calculatorDisplay.textContent.includes('.')){
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

const useOperator = (operator)=>{
  const currentValue = Number(calculatorDisplay.textContent);
  // Assign firstValue if has no value
  if(!firstValue){
    firstValue = currentValue;
  }
  operatorValue = operator;
  console.log('firstValue: ', firstValue);
  console.log('operatorValue: ', operatorValue);
}

// Add Event Listeners for numbers, operators, and decimal buttons
inputBtns.forEach((inputBtn)=>{
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener('click', ()=> sendNumValue(inputBtn.value));
  }else if(inputBtn.classList.contains('operator')){
    inputBtn.addEventListener('click', ()=> useOperator(inputBtn.value));
  }else if(inputBtn.classList.contains('decimal')){
    inputBtn.addEventListener('click', addDecimal);
  }
});

// Reset display
const resetAll = ()=>{
  calculatorDisplay.textContent ='0';
}

// Event Listener for clearBtn
clearBtn.addEventListener('click', resetAll);
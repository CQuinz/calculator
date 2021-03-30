const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumValue = (number)=>{
  // Replace current display value if first value is entered
  if(awaitingNextValue){
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  }else{
    // If current display value is 0, if not add number
    const displayValue = calculatorDisplay.textContent;
    // Tierny condition
    calculatorDisplay.textContent = displayValue === '0' ? number: displayValue + number;
  }
}

const addDecimal = ()=>{
  // If operator pressed, don't add decimal
  if(awaitingNextValue) return;
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
  }else{
    console.log('currentValue: ', currentValue);
  }
  // ready for our next value, store the operator
  awaitingNextValue = true;

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

// Reset all values display
const resetAll = ()=>{
  calculatorDisplay.textContent ='0';
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;

}

// Event Listener for clearBtn
clearBtn.addEventListener('click', resetAll);
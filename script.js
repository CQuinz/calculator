const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const sendNumValue = (number)=>{
  // If current dispaly value is 0, weant to replace it, if not, add number
  const displayValue = calculatorDisplay.textContent;
  // Tierny condition
  calculatorDisplay.textContent = displayValue === '0' ? number: displayValue + number;
}

// Add Event Listeners for numbers, operators, and decimal buttons
inputBtns.forEach((inputBtn)=>{
  if(inputBtn.classList.length === 0){
    inputBtn.addEventListener('click', ()=> sendNumValue(inputBtn.value));
  }else if(inputBtn.classList.contains('operator')){
    inputBtn.addEventListener('click', ()=> sendNumValue(inputBtn.value));
  }else if(inputBtn.classList.contains('decimal')){
    inputBtn.addEventListener('click', ()=> sendNumValue(inputBtn.value));
  }
});
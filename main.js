//Variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")  
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

let randomNumber = Math.round(Math.random () * 10)
let xAttempts = 1;
const inputNumber = document.querySelector(".inputNumber")

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyEnter)

// Funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão desse evento

  

  if(Number(inputNumber.value) === randomNumber) {
    toggleScreen() 
    
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
    
    
  } 
  zeroAndTen()
  
  notSumerClicks()

  inputNumber.value = "" 
  xAttempts++

  
}


function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random () * 10)
}

function toggleScreen () {
  screen1.classList.toggle("hide") 
  screen2.classList.toggle("hide") 
}



function zeroAndTen () {
  if(Number(inputNumber.value) > 10) {
    alert(`Por favor , informe um número de 0 á 10.`)
    return;
  } else if(Number(inputNumber.value) < 0) {
    alert(`Por favor , informe um número de 0 á 10.`)
  }
}

function keyEnter(event) {
  if(event.key == 'Enter' && screen1.classList.contains('hide') ) {
    handleResetClick()
  }
}

function notSumerClicks() {
  if(Number(inputNumber.value) === 0) {
    xAttempts = 1
    return;
  }
}
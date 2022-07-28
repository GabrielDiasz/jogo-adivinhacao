// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = getRandomNumber()
let attemps = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

// Funções callbacks
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `Acertou em ${attemps} tentativas`
  }

  inputNumber.value = ''
  attemps++
}

function handleResetClick() {
  randomNumber = getRandomNumber()
  toggleScreen()
  attemps = 1
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function getRandomNumber() {
  return Math.round(Math.random() * 10)
}
window.onload = function createBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const child = document.createElement('div');
      child.className = 'pixel';
      child.style.height = '40px';
      child.style.width = '40px';
      child.style.backgroundColor = 'white';
      child.style.border = '1px solid black';
      child.style.float = 'left';
      pixelBoard.appendChild(child);
    }
  }
};

function selectColor(button, currentColor) {
  // Retorna cor selecionada
  const selectedColor = button;
  currentColor.classList.remove('selected');
  button.classList.add('selected');
  return selectedColor;
}

function resetPixels() {
  const elements = document.getElementsByClassName('pixel');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.backgroundColor = 'white';
  }
}

// Declaração das variáveis
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
const pixels = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const backgroundSwitch = document.getElementById('bg-icon');
const body = document.getElementsByTagName('body')[0];

// Cor dos botões
const bg = 'background-color';
let firstButtonColor = window.getComputedStyle(button1, null).getPropertyValue(bg);
let secondButtonColor = window.getComputedStyle(button2, null).getPropertyValue(bg);
let thirdButtonColor = window.getComputedStyle(button3, null).getPropertyValue(bg);
let fourthButtonColor = window.getComputedStyle(button4, null).getPropertyValue(bg);

const changeFirstColor = document.getElementById('scolor1');
const changeSecondColor = document.getElementById('scolor2');
const changeThirdColor = document.getElementById('scolor3');
const changeFourthColor = document.getElementById('scolor4');

// Adiciona a classe selected para button1
button1.classList.add('selected');

// Variavel corAtual
let currentColor = document.getElementsByClassName('selected')[0];
let currentRGB = firstButtonColor;

function colorPixels(event) {
  event.target.style.backgroundColor = currentRGB;
}

function changeBackgroundColor(background) {
  const nm = 'night-mode';
  const dm = 'day-mode';

  if (background.includes(nm)) {
    backgroundSwitch.classList.remove(nm);
    backgroundSwitch.classList.add(dm);
    backgroundSwitch.src = '/icons/brightness.png';
    body.style.backgroundColor = '#616e7c';
  } else {
    backgroundSwitch.classList.remove(dm);
    backgroundSwitch.classList.add(nm);
    backgroundSwitch.src = '/icons/night-mode.png';
    body.style.backgroundColor = '#ffffff';
  }
}

// Eventos de clique
button1.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = firstButtonColor;
});
button2.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = secondButtonColor;
});
button3.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = thirdButtonColor;
});
button4.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = fourthButtonColor;
});

changeFirstColor.addEventListener('input', () => {
  firstButtonColor = changeFirstColor.value;
  button1.style.backgroundColor = firstButtonColor;
  currentColor = document.getElementsByClassName('selected')[0];
  currentColor = selectColor(button1, currentColor);
  currentRGB = firstButtonColor;
});
changeSecondColor.addEventListener('input', () => {
  secondButtonColor = changeSecondColor.value;
  button2.style.backgroundColor = secondButtonColor;
  currentColor = document.getElementsByClassName('selected')[0];
  currentColor = selectColor(button2, currentColor);
  currentRGB = secondButtonColor;
});
changeThirdColor.addEventListener('input', () => {
  thirdButtonColor = changeThirdColor.value;
  button3.style.backgroundColor = thirdButtonColor;
  currentColor = document.getElementsByClassName('selected')[0];
  currentColor = selectColor(button3, currentColor);
  currentRGB = thirdButtonColor;
});
changeFourthColor.addEventListener('input', () => {
  fourthButtonColor = changeFourthColor.value;
  button4.style.backgroundColor = fourthButtonColor;
  currentColor = document.getElementsByClassName('selected')[0];
  currentColor = selectColor(button4, currentColor);
  currentRGB = fourthButtonColor;
});
pixels.addEventListener('click', colorPixels);

clearButton.addEventListener('click', resetPixels);

backgroundSwitch.addEventListener('click', () => {
  const currentBackground = backgroundSwitch.className;
  changeBackgroundColor(currentBackground);
});

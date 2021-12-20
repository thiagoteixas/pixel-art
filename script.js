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
  console.log(button);
  currentColor.classList.remove('selected');
  button.classList.add('selected');
  return selectedColor;
}

function colorPixels(event) {
  console.log(event.target);
  event.target.style.backgroundColor = currentRGB;
}

function resetPixels() {
  const elements = document.getElementsByClassName('pixel');
  for (let i = 0; i < elements.length; i += 1) {
    elements[i].style.backgroundColor = 'white';
  }
}

function teste(event) {
  console.log(event.target);
}

// Declaração das variáveis
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
const pixels = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');

// Cor dos botões
const firstButtonColor = window.getComputedStyle(button1, null).getPropertyValue('background-color');
const secondButtonColor = window.getComputedStyle(button2, null).getPropertyValue('background-color');
const thirdButtonColor = window.getComputedStyle(button3, null).getPropertyValue('background-color');
const fourthButtonColor = window.getComputedStyle(button4, null).getPropertyValue('background-color');

// Adiciona a classe selected para button1
button1.classList.add('selected');

// Variavel corAtual
let currentColor = document.getElementsByClassName('selected')[0];
let currentRGB = firstButtonColor;

// Eventos de clique
button1.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = firstButtonColor;
  console.log(currentColor);
});
button2.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = secondButtonColor;
  console.log(currentColor);
});
button3.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = thirdButtonColor;
  console.log(currentColor);
});
button4.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  currentRGB = fourthButtonColor;
  console.log(currentColor);
});
pixels.addEventListener('click', colorPixels);

clearButton.addEventListener('click', resetPixels);

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

function teste(event) {
  console.log(event.target);
}

// Declaração das variáveis
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
const pixels = document.getElementsByClassName('pixel');

console.log(pixels);

// Adiciona a classe selected para button1
button1.classList.add('selected');

// Variavel corAtual
let currentColor = document.getElementsByClassName('selected')[0];

// Eventos de clique
button1.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  console.log(currentColor);
});
button2.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  console.log(currentColor);
});
button3.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  console.log(currentColor);
});
button4.addEventListener('click', function () {
  currentColor = selectColor(this, currentColor);
  console.log(currentColor);
});
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (currentColor) {
    pixels[index].style.backgroundColor = currentColor.style.backgroundColor;
    console.log(pixels[index]);
  });
}

// Atualiza corAtual quando os botões forem clicados
// corAtual = selectColor();

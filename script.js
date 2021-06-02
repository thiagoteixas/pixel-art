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

function selectColor(event) {
  // Retorna cor selecionada
  const corSelecionada = event.style.color;
  return corSelecionada;
}

// Declaração das variáveis
const button1 = document.getElementById('color1');
const button2 = document.getElementById('color2');
const button3 = document.getElementById('color3');
const button4 = document.getElementById('color4');
// const pixels = document.getElementsByClassName('pixel');

// Adiciona a classe selected para button1
button1.classList.add('selected');

// Eventos de clique
button1.addEventListener('click', selectColor);
button2.addEventListener('click', selectColor);
button3.addEventListener('click', selectColor);
button4.addEventListener('click', selectColor);
// pixels.addEventListener('click', coloringPixels(corAtual));

// Atualiza corAtual quando os botões forem clicados
// corAtual = selectColor();

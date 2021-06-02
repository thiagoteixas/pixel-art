function createPixelBoard() {
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
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    console.log(pixels[index]);
  }
}

window.onload = createPixelBoard;

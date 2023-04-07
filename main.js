const boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';

function handleClick() {
  if (this.innerHTML) {
    return;
  }

  this.innerHTML = currentPlayer;

  if (checkWinner()) {
    alert(`Oyunu kazanan: ${currentPlayer}`);
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[b].innerHTML === boxes[c].innerHTML) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  boxes.forEach(function(box) {
    box.innerHTML = '';
  });
  currentPlayer = 'X';
}

boxes.forEach(function(box) {
  box.addEventListener('click', handleClick);
});
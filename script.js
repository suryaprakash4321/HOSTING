// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  function handleClick(e) {
    const index = e.target.dataset.index;

    if (!gameActive || gameBoard[index]) return;

    gameBoard[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        message.textContent = `${currentPlayer} Wins!`;
        updateLeaderboard(currentPlayer);
        if (currentPlayer === 'X') {
            partyAnimation.classList.add('active');
        } else {
            sadAnimation.classList.add('active');
        }
        gameActive = false;
    } else if (gameBoard.every(cell => cell)) {
        message.textContent = 'Draw!';
        drawAnimation.classList.add('active');
        updateLeaderboard('Draw'); // Update leaderboard for draw
        gameActive = false;
    } else {
        currentPlayer = 'O';
        setTimeout(botMove, 500); // Adding delay for realism
    }
}


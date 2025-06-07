
const buttons = document.querySelectorAll('button[data-choice]');
const result = document.getElementById('result');
const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const roundEl = document.getElementById('round');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let cpuScore = 0;
let round = 1;
const maxRounds = 5;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (round > maxRounds) return;

    const playerChoice = button.dataset.choice;
    const cpuChoice = getCpuChoice();
    const winner = getWinner(playerChoice, cpuChoice);

    displayResult(playerChoice, cpuChoice, winner);
    updateScore(winner);
    round++;
    roundEl.textContent = round;

    if (round > maxRounds) {
      declareFinalWinner();
    }
  });
});

resetBtn.addEventListener('click', resetGame);

function getCpuChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(player, cpu) {
  if (player === cpu) return 'draw';
  if (
    (player === 'rock' && cpu === 'scissors') ||
    (player === 'scissors' && cpu === 'paper') ||
    (player === 'paper' && cpu === 'rock')
  ) return 'player';
  return 'cpu';
}

function displayResult(player, cpu, winner) {
  if (winner === 'draw') {
    result.textContent = `It's a draw! You both chose ${player}.`;
  } else if (winner === 'player') {
    result.textContent = `You win! ${player} beats ${cpu}.`;
  } else {
    result.textContent = `You lose! ${cpu} beats ${player}.`;
  }
}

function updateScore(winner) {
  if (winner === 'player') {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (winner === 'cpu') {
    cpuScore++;
    cpuScoreEl.textContent = cpuScore;
  }
}

function declareFinalWinner() {
  let finalMsg = '';
  if (playerScore > cpuScore) {
    finalMsg = '🎉 You win the game!';
  } else if (cpuScore > playerScore) {
    finalMsg = '💀 You lost the game.';
  } else {
    finalMsg = "🤝 It's a tie overall!";
  }
  result.textContent += ` ${finalMsg}`;
  resetBtn.style.display = 'inline-block';
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  round = 1;
  playerScoreEl.textContent = 0;
  cpuScoreEl.textContent = 0;
  roundEl.textContent = 1;
  result.textContent = '';
  resetBtn.style.display = 'none';
}
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

button.addEventListener('click', () => {
  if (round > maxRounds) return;
  sounds.click.play(); // Play click sound

  const playerChoice = button.dataset.choice;
  const cpuChoice = getCpuChoice();
  const winner = getWinner(playerChoice, cpuChoice);

  displayResult(playerChoice, cpuChoice, winner);
  updateScore(winner);
  playSound(winner); // <-- Add this line

  round++;
  roundEl.textContent = round;

  if (round > maxRounds) declareFinalWinner();
});

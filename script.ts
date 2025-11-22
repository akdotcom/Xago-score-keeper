let player1Score = 0;
let player2Score = 0;

const player1Area = document.getElementById('player1')!;
const player2Area = document.getElementById('player2')!;
const scoreDifference = document.getElementById('score-difference')!;
const winningArrow = document.getElementById('winning-arrow')!;
const settingsIcon = document.getElementById('settings-icon')!;
const settingsModal = document.getElementById('settings-modal')!;
const player1ColorInput = document.getElementById('player1-color') as HTMLInputElement;
const player2ColorInput = document.getElementById('player2-color') as HTMLInputElement;
const saveColorsButton = document.getElementById('save-colors')!;

player1Area.addEventListener('click', () => {
    player1Score++;
    updateScore();
});

player2Area.addEventListener('click', () => {
    player2Score++;
    updateScore();
});

function updateScore() {
    const difference = Math.abs(player1Score - player2Score);
    scoreDifference.innerText = difference.toString();
    scoreDifference.style.color = 'black';

    winningArrow.classList.remove('up', 'down');

    if (player1Score > player2Score) {
        winningArrow.classList.add('up');
        scoreDifference.style.color = player1ColorInput.value;
    } else if (player2Score > player1Score) {
        winningArrow.classList.add('down');
        scoreDifference.style.color = player2ColorInput.value;
    }
}

settingsIcon.addEventListener('click', () => {
    settingsModal.classList.add('visible');
});

saveColorsButton.addEventListener('click', () => {
    const player1Color = player1ColorInput.value;
    const player2Color = player2ColorInput.value;

    player1Area.style.backgroundColor = player1Color;
    player2Area.style.backgroundColor = player2Color;

    settingsModal.classList.remove('visible');
});

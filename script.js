"use strict";
var player1Score = 0;
var player2Score = 0;
var player1Area = document.getElementById('player1');
var player2Area = document.getElementById('player2');
var scoreDifference = document.getElementById('score-difference');
var winningArrow = document.getElementById('winning-arrow');
var settingsIcon = document.getElementById('settings-icon');
var settingsModal = document.getElementById('settings-modal');
var player1ColorInput = document.getElementById('player1-color');
var player2ColorInput = document.getElementById('player2-color');
var saveColorsButton = document.getElementById('save-colors');
player1Area.addEventListener('click', function () {
    player1Score++;
    updateScore();
});
player2Area.addEventListener('click', function () {
    player2Score++;
    updateScore();
});
function updateScore() {
    var difference = Math.abs(player1Score - player2Score);
    scoreDifference.innerText = difference.toString();
    scoreDifference.style.color = 'black';
    winningArrow.classList.remove('up', 'down');
    if (player1Score > player2Score) {
        winningArrow.classList.add('up');
        scoreDifference.style.color = player1ColorInput.value;
    }
    else if (player2Score > player1Score) {
        winningArrow.classList.add('down');
        scoreDifference.style.color = player2ColorInput.value;
    }
}
settingsIcon.addEventListener('click', function () {
    settingsModal.classList.add('visible');
});
saveColorsButton.addEventListener('click', function () {
    var player1Color = player1ColorInput.value;
    var player2Color = player2ColorInput.value;
    player1Area.style.backgroundColor = player1Color;
    player2Area.style.backgroundColor = player2Color;
    settingsModal.classList.remove('visible');
});

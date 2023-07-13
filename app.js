const p1 = {
    score: 0,
    generalScore: 0,
    generalDisplayedScore: document.querySelector('#p1GeneralScore'),
    button: document.querySelector('#one'),
    display: document.querySelector('#firstScore'),
    nameInput: document.querySelector('#p1Name')
}
const p2 = {
    score: 0,
    generalScore: 0,
    generalDisplayedScore: document.querySelector('#p2GeneralScore'),
    button: document.querySelector('#two'),
    display: document.querySelector('#secondScore'),
    nameInput: document.querySelector('#p2Name')
}
let winningScore = 3;
const buttonReset = document.querySelector('#reset')
const buttonResetGeneral = document.querySelector('#resetGeneral')
const winningScoreSelect = document.querySelector('#gameNumbers')


p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

function updateScore(player, opponent) {
    if (player.score < winningScore) {
        player.score += 1;
        if (player.score === winningScore) {
            player.display.classList.toggle('has-text-success')
            opponent.display.classList.toggle('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.generalScore += 1;
        } player.display.textContent = player.score;
    }
    player.generalDisplayedScore.textContent = player.generalScore;

}

function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}

function resetGeneral() {
    for (let p of [p1, p2]) {
        p.generalScore = 0;
        p.generalDisplayedScore.textContent = 0;
    }
}

buttonReset.addEventListener('click', reset)
buttonResetGeneral.addEventListener('click', resetGeneral)


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
})

p1.nameInput.addEventListener('input', function () {
    p1.button.textContent = p1.nameInput.value;
})
p2.nameInput.addEventListener('input', function () {
    p2.button.textContent = p2.nameInput.value;
})

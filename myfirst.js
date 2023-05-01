function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    value = getRandomInt(3);
    switch (value) {
        case 0:
            return 'PAPER';
        case 1:
            return 'SCISOR';
        case 2:
            return 'ROCK'
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();
    computer = computerSelection.toUpperCase();
    rock = 'ROCK'
    scisor = 'SCISOR'
    paper = 'PAPER'
    if ((player==rock && computer==scisor) || (player==paper && computer==rock) || (player==scisor && computer==paper)) {
        playerScore++;
        return 'player win';
    } else if (player == computer) {
        return 'no winner';
    } else {
        computerScore++;
        return 'computer win';
    }

}

function game() {
    for (let i = 0; i < 5; i++)
    {
        playerSelection = prompt('Enter scisor paper or rock: ', undefined)
        const computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    if (playerScore > computerScore) {
        console.log('Player win the game');
    } else if (computerScore > playerScore) {
        console.log('Computer win the game');
    } else {
        console.log ('This game as no winner');
    }
    return;
}

let playerScore = 0;
let computerScore = 0;
game();
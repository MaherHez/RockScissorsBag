const a = document.getElementById('show-rock-comp');
const b = document.getElementById('show-paper-comp');
const c = document.getElementById('show-scissors-comp');

const displaypaper = document.getElementById('show-paper');
const displayscissors = document.getElementById('show-scissors');
const displayRock = document.getElementById('show-rock');

const rockSelected = document.getElementById('select-rock');
const paperSelected = document.getElementById('select-paper');
const scissorsSelected = document.getElementById('select-scissors');


function selectRock() {


    console.log("You selected rock!");
    rockSelected.style.display = 'none';
    displayRock.style.display = 'block';

    let computerOptions = [a, b, c];
    const computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


    computersChoice.style.display = "block";

    if (computersChoice === a && displayRock === document.getElementById('show-rock')) {
        console.log("Its a tie");

    }
    else if (computersChoice === c && displayRock === document.getElementById('show-rock')) {
        yourScore.innerHTML = Number(yourScore.innerHTML) + 1;
        console.log(yourScore.innerHTML)
    }

    else if ((computersChoice === b && displayRock === document.getElementById('show-rock'))) {
        compScore.innerHTML = Number(compScore.innerHTML) + 1;
        console.log(compScore.innerHTML)

    }

}

function selectScissors() {

    console.log("You selected scissors!");
    scissorsSelected.style.display = 'none';
    displayscissors.style.display = 'block';

    let computerOptions = [a, b, c];
    const computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    console.log(computersChoice)

    computersChoice.style.display = "block";


    if (computersChoice === c && displayscissors === document.getElementById('show-scissors')) {
        console.log("Its a tie");
    }

    else if (computersChoice === b && displayscissors === document.getElementById('show-scissors')) {

        console.log("You won a point!")
        yourScore.innerHTML = Number(yourScore.innerHTML) + 1;
        console.log(yourScore.innerHTML)
    }

    else if ((computersChoice === a && displayscissors === document.getElementById('show-scissors'))) {
        console.log("You lost a point")
        compScore.innerHTML = Number(compScore.innerHTML) + 1;
        console.log(compScore.innerHTML)

    }
}


function selectPaper() {

    console.log("You selected paper!");
    paperSelected.style.display = 'none';
    displaypaper.style.display = 'block';


    let computerOptions = [a, b, c];
    const computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    console.log(computersChoice)

    computersChoice.style.display = "block";


    if (computersChoice === b && displaypaper === document.getElementById('show-paper')) {
        console.log("Its a tie");
    }

    else if (computersChoice === c && displaypaper === document.getElementById('show-paper')) {
        console.log("You lost a point!")
        compScore.innerHTML = Number(compScore.innerHTML) + 1;
        console.log(compScore.innerHTML)

    }

    else if ((computersChoice === a && displaypaper === document.getElementById('show-paper'))) {
        console.log("You won a point!")
        yourScore.innerHTML = Number(yourScore.innerHTML) + 1;
        console.log(yourScore.innerHTML)
    }

}

function reset() {

    rockSelected.style.display = 'block';
    displayRock.style.display = 'none';

    scissorsSelected.style.display = 'block';
    displayscissors.style.display = 'none';

    paperSelected.style.display = 'block';
    displaypaper.style.display = 'none';

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";

    if (yourScore.innerHTML == 12) {
        alert("Congratulations you won!")

    }

    if (compScore.innerHTML == 12) {
        alert("Game over, you lost!")
    }


}






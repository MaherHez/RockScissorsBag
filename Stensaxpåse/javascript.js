

/* function selectRock() {
    const rockSelected = document.getElementById('select-rock');
    console.log("You selected rock!");
    rockSelected.style.display = 'none';
    const displayRock = document.getElementById('show-rock')
    displayRock.style.display = 'block';
} */

/* function selectPaper() {
    const paperSelected = document.getElementById('select-paper');
    console.log("You selected paper!");
    paperSelected.style.display = 'none';
    const displaypaper = document.getElementById('show-paper')
    displaypaper.style.display = 'block';
} */

/* function selectScissors() {
    const scissorsSelected = document.getElementById('select-scissors');
    console.log("You selected scissors!");
    scissorsSelected.style.display = 'none';
    const displayscissors = document.getElementById('show-scissors')
    displayscissors.style.display = 'block';

} */


const a = document.getElementById('show-rock-comp');
const b = document.getElementById('show-paper-comp');
const c = document.getElementById('show-scissors-comp');


function selectRock() {

    const rockSelected = document.getElementById('select-rock');
    console.log("You selected rock!");
    rockSelected.style.display = 'none';
    const displayRock = document.getElementById('show-rock')
    displayRock.style.display = 'block';

    let computerOptions = [a, b, c];
    const computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    console.log(computersChoice)

    computersChoice.style.display = "block";

    if (computersChoice === a && displayRock === document.getElementById('show-rock')) {
        console.log("Its a tie");


        
    }

    else if (computersChoice === c && displayRock === document.getElementById('show-rock')) {

        console.log("You won a point!")
    }

    else if ((computersChoice === b && displayRock === document.getElementById('show-rock'))) {
        console.log("You lost a point")
    }


}

function selectScissors() {

    const scissorsSelected = document.getElementById('select-scissors');
    console.log("You selected scissors!");
    scissorsSelected.style.display = 'none';
    const displayscissors = document.getElementById('show-scissors')
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
    }

    else if ((computersChoice === a && displayscissors === document.getElementById('show-scissors'))) {
        console.log("You lost a point")
    }
}


function selectPaper() {

    const paperSelected = document.getElementById('select-paper');
    console.log("You selected paper!");
    paperSelected.style.display = 'none';
    const displaypaper = document.getElementById('show-paper')
    displaypaper.style.display = 'block';


    let computerOptions = [a, b, c];
    const computersChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    console.log(computersChoice)

    computersChoice.style.display = "block";


    if (computersChoice === b && displaypaper === document.getElementById('show-paper')) {
        console.log("Its a tie");
    }

    else if (computersChoice === c && displaypaper === document.getElementById('show-paper')) {

        console.log("You won a point!")
    }

    else if ((computersChoice === a && displaypaper === document.getElementById('show-paper'))) {
        console.log("You lost a point")
    }



}





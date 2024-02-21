let userScore = 0;
let computerScore = 0
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#computerScore");


const genComputerChoice = () => 
{
    // rock , paper , scissors
    const options = ["rock","paper","scissors"];
    Math.random();
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];
}


const drawGame = () =>
{
    console.log("Game was Draw");
    msg.innerText = "Play again, Game is Draw";
    msg.style.color = "white";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin, userChoice, computerChoice) =>
{
    if(userWin === true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win, ${userChoice} beats ${computerChoice}`;
        msg.style.color = "black"
        msg.style.backgroundColor = "#00ff00";
        msg.style.border = "5px solid black";
    }
    else
    {
        computerScore++;
        compScorePara.innerText = computerScore;
        // console.log("You Lose");
        msg.innerText = `You Lose ! ${computerChoice} beats ${userChoice}`;
        msg.style.color = "white"
        msg.style.backgroundColor = "red";
        msg.style.border = "none";
    }
}


const playGame = (userChoice) =>
{
    console.log("Userchoice = ",userChoice);
    //Generate Computer Choice
    const computerChoice = genComputerChoice();
    console.log("Computer Choice = ",computerChoice);

    if(userChoice === computerChoice)
    {
        // Draw Game
        drawGame();
    } else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //scissors , paper
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock , scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else
        {
            // rock , paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}


choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})
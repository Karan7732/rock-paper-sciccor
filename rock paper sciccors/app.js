userScore = 0
compScore = 0

choices = document.querySelectorAll(".choice")
msg = document.querySelector("#msg")

userScorePara = document.querySelector("#user-score")
compScorePara = document.querySelector("#comp-score")


getCompChoice = () => {
    option = ["rock", "paper", "sciccor"]
    randonIdx = Math.floor(Math.random() * 3)
    return option[randonIdx]
}

drawGame = () => {
    msg.innerText = "Game is Draw"
    msg.style.backgroundColor = "black"
}

showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `You are Win user ${userChoice} Beats computer ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++
        compScorePara.innerText = compScore
        msg.innerText = `You are loss Comp ${compChoice} Beats user ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


playGame = (userChoice) => {
    compChoice = getCompChoice()

    if (userChoice === compChoice) {
        drawGame()
    } else {

        userWin = true

        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true
        } else if (userChoice === "paper") {
            userWin = compChoice === "sciccor" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true
        }

        showWinner(userWin,userChoice,compChoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id")
        console.log(userChoice);
        playGame(userChoice)

    })
})
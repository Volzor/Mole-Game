// using .quierySelectorAll since there are multiple squares to grab
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

// storing game score and time left into variables 
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

// for each square we check for the mole and remove it
const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
// assigns the 'mole' to random square, Math.floor rounds down the 9 to gives us an index of 8 max, ensuring we don't go to a non-existent square.
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

// function to increase score everytime we hit a mole 
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.innerHTML = result
            hitPosition = null
        }
    })
})
// moves the mole to a random square on the grid every s
const moveMole = () => {
    timerId = setInterval(randomSquare, 1000)

}


const countDown = () => {
    currentTime--
    timeLeft.innerHTML = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your score is: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000);

countDown()
moveMole()

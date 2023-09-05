//global variables
const timeElement = document.querySelector('.time, .timerContainer')
//buttons
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const restartBtn = document.getElementById('restart')

let seconds = 0
let interval = null

//event listners

//fucntion that ticks up and udpates timer
function timer() {
    seconds++
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60

    timeElement.innerText = `${hrs}:${mins}:${secs}`
}

timer()
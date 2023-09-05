//global variables
const timeElement = document.querySelector('.time')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const restartBtn = document.getElementById('restart')

let seconds = 0
let interval = null

//event listners
startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
restartBtn.addEventListener('click', reset)

//fucntion that ticks up and udpates timer
function timer() {
    seconds++
    let hrs = Math.floor(seconds / 3600)
    let mins = Math.floor((seconds - (hrs * 3600)) / 60)
    let secs = seconds % 60

    if (secs < 10) { secs = '0' + secs }
    if (mins < 10) { mins = '0' + mins }
    if (hrs < 10) { hrs = '0' + hrs }

    timeElement.innerText = `${hrs}:${mins}:${secs}`
}

//button functions here
function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

function pause() {
    clearInterval(interval)
    interval = null
}

function reset() {
    stop()
    seconds = 0
    timeElement.innerText = '00:00:00'
}
// steps for working with the audio Worklet

// - extracting microphone data and sending to processor
// - create new audio context: entry point for audio api 
// - create audio worklet node: contains audio worklet processor (tunerProcessor)
// - audio worklet global scope: used to contain global variables + functions for multiple processors

// other steps necessary

// - button to start audio processing
// - canvas for animation of dial 
// - unit testing to determina accuracy
let startButtonState = 'off'

const startButton = document.getElementById("start-button")

function startButtonEventListener() {
    function click() {
        if (startButtonState=='off') {
            startButton.innerHTML="stop"
            startButtonState='on'

            //call init tuner stuff
        }else {
            startButton.innerHTML="start"
            startButtonState='off'
            //call release resources
        }
    }
    startButton.addEventListener('click', click)
}
startButtonEventListener()

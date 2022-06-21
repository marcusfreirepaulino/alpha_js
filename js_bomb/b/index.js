
const bomb = document.getElementById('bomb')
const countdownTimeout = setInterval(countdown, 1000);
let counter = 60;
const timerDisplay = document.getElementById('timer');

function countdown() {
    timerDisplay.textContent = counter;
    counter--;
    if (counter < 0) {
        clearInterval(countdownTimeout);
        timerDisplay.textContent = "BOOOM!";
        bomb.style.color = "red"
        return;
    }

}

bomb.addEventListener('click', () => {
    clearInterval(countdownTimeout);

    bomb.style.color = "blue"
    timerDisplay.textContent = "We did it!";
}

)


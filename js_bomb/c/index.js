
const btn = document.querySelector('button');
btn.addEventListener('click', startCountdowm);

const timerDisplay = document.getElementById('timer');

function startCountdowm() {

    timerDisplay.style.color = "black";
    
    if(btn.textContent === "Start timer"){

        let selectedSeconds = parseInt(document.getElementById('seconds').value, 10);
        let selectedMinutes = parseInt(document.getElementById('minutes').value, 10);

        try {
            if(isNaN(selectedMinutes) || isNaN(selectedSeconds)){
                throw "error";
            }
        } catch (e) {
            return;
        }

        btn.textContent = "Stop timer"
        document.getElementById('seconds').disabled = true;
        document.getElementById('minutes').disabled = true;

        const countdownInterval = setInterval(countdown, 1000);

        function countdown() {
            timerDisplay.textContent = `${selectedMinutes} : ${selectedSeconds}`;

            selectedSeconds--;

            if (selectedSeconds < 0) {
                selectedSeconds = 59;
                selectedMinutes--;
            }
            if (selectedMinutes < 0) {
                clearInterval(countdownInterval);
                timerDisplay.style.color = "green";
                btn.textContent = "Start timer";
                document.getElementById('seconds').disabled = false;
                document.getElementById('minutes').disabled = false;
            }
        }

    }
    else if(btn.textContent === "Stop timer"){
        clearInterval(countdownInterval);
        btn.textContent = "Start timer";
        document.getElementById('seconds').disabled = false;
        document.getElementById('minutes').disabled = false;
        selectedMinutes = 0;
        selectedSeconds = 0;

    }

}




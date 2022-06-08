
     document.querySelector('button').addEventListener('click', getRandomNumber);
     const text = document.getElementById('hidden-text');

     function getRandomNumber(){
        let min = parseFloat(document.getElementById('min').value);
        let max = parseFloat(document.getElementById('max').value);

        if( isNaN(min) || isNaN(max) || min >= max){
            text.textContent = "Os valores inseridos não são válidos.";
        }
        else if(Number.isInteger(min) === false || Number.isInteger(max) === false)
            text.textContent = "Os valores inseridos não são inteiros.";
        else{
            text.textContent = Math.floor(Math.random() * (max - min) + min);
        }
     }

     
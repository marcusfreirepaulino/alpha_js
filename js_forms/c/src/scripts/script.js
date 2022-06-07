
    function deathCalculator(){
        let birthDay = new Date(document.getElementById('age').value);
        const gender = document.querySelectorAll('input[type="radio"]');
        const today = new Date();
        
        let ageInMS = today.getTime() - birthDay.getTime();
        let ageInDays = Math.floor(ageInMS / (1000 * 60 * 60 * 24));
        let lifeExpectative;
        let daysLeft;
        let text;

        if(gender[0].checked){
            lifeExpectative = 26699;
            daysLeft = lifeExpectative - ageInDays;
            text = "Você tem " + daysLeft + " dias restantes. Faça bom uso.";
        }
        else if (gender[1].checked){
            lifeExpectative = 29256;
            daysLeft = lifeExpectative - ageInDays;
            text = "Você tem " + daysLeft + " dias restantes. Faça bom uso.";
        }
        else{
            alert('Por favor, selecione seu gênero.')
            text = "";
        }
        document.getElementById('text').innerHTML = text;
    }


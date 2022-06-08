
    document.querySelector('button').addEventListener('click', Calculate);

    const txt = document.getElementById('imc-text');
    const classification = document.getElementById('imc-class');
    let result;

    function Calculate(){
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if( isNaN(weight) || isNaN(height)){
            txt.textContent = "Os valores inseridos não são válido.";
            classification.textContent = ""
        }
        else{
            result = weight / (height**2);
            txt.textContent = "Seu IMC é: " + result.toFixed(2);

                if(result < 18.5){
                    classification.textContent = "Abaixo de peso";
                }
                else if( result >= 18.5 && result < 25){
                    classification.textContent = "Peso normal";
                }
                else if( result >= 25 && result < 30){
                    classification.textContent = "Sobrepeso"
                }
                else{
                    classification.textContent = "Obesidade"
                }
        }
    }
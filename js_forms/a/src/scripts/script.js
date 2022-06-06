
    function Compare() {
        let a = document.getElementById('number').value;
        let b = document.getElementById('secondNumber').value;

        let x = Number.parseFloat(a);
        let y = Number.parseFloat(b);

        let text;
       
        if(x > y){
            text = a + " é maior que " + b;
        }
        else if(x < y){
            text = a + " é menor que " + b;
        }
        else if(x === y){
            text = a + " é igual a " + b;
        }

        else{
            text = "Esse input não é válido"; 
        }
        document.getElementById("demo").innerHTML = text;
    }

    document.getElementById('compareBtn').onclick = Compare();


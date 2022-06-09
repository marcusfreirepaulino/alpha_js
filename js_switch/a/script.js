
    document.querySelector('button').addEventListener('click', display);

    function display(){
        const number = parseInt(document.getElementById('numb').value, 10);
        let txt = document.getElementById('post-text');


        if(number >=0 && number<=10){
        switch(number){
            case 0:
                txt.textContent = "Zero"
                break;
            case 1:
                txt.textContent = "Um"
                break;
            case 2:
                txt.textContent = "Dois"
                break;
            case 3:
                txt.textContent = "Três"
                break;
            case 4:
                txt.textContent = "Quatro"
                break;
            case 5:
                txt.textContent = "Cinco"
                break;
            case 6:
                txt.textContent = "Seis"
                break;
            case 7:
                txt.textContent = "Sete"
                break;
            case 8:
                txt.textContent = "Oito"
                break;
            case 9:
                txt.textContent = "Nove"
                break;
            case 10:
                txt.textContent = "Dez"
                break;

        }
    }
    else if(isNaN(number)){
        txt.textContent = "O valor inserido não é válido."
    }
    else{
        txt.textContent = "Insira um valor inteiro maior ou igual à 0, e menor ou igual à 10."
    }
    }
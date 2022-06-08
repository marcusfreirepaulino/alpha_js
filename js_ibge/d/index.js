// Chance of being a woman: 51.7%. Chance of being a eldery: 16.7%

document.querySelector('button').addEventListener('click', Sort);

let txt = document.getElementById('hidden-text');

function Sort(){
    const gender = parseFloat(Math.random()*101);
    const age = parseFloat(Math.random()*101);

    if(gender <= 51.7 && age<= 16.7){
        txt.textContent = "Mulher idosa";
    }
    else if(gender <= 51.7 && age > 16.7){
        txt.textContent = "Mulher";
    }
    else if(gender > 51.7 && age <= 16.7){
        txt.textContent = "Homem idoso"
    }
    else{
        txt.textContent = "Homem"
    }


}
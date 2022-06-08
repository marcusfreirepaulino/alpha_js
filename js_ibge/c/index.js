
    document.querySelector('button').addEventListener('click', Round);
    
    const txt = document.getElementById('hidden-text');
       
    function Round(){
        const numb = parseFloat(document.getElementById('number').value);
        let ceil;
        let floor;
        
        if(isNaN(numb)){
            txt.textContent = "O valor inserido não é válido.";
        }
        else{
            ceil = Math.ceil(numb);
            floor = Math.floor(numb);

            txt.textContent = "Valor máximo: " + ceil + "." + " Valor mínimo: " + floor + ".";
        }    
    }



    document.getElementById('cep').addEventListener('keydown', () =>{
    
    let cepInput = document.getElementById('cep');

    if(cepInput.value.length === 5){
        cepInput.value += "-";
    }
   })
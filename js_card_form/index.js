
    const btn = document.querySelector('button');
    const txt = document.getElementById('hidden-text');
    let result;

    btn.addEventListener('click', Calculate);

    function Calculate(){
        const operando1 = document.getElementById('operando1').value;
        const operando2 = document.getElementById('operando2').value;
        const x = parseFloat(operando1);
        const y = parseFloat(operando2);
        const operador = document.querySelector('select').value;

        if( isNaN(x) || isNaN(y)){
            txt.textContent = "Argumentos inválidos."
        }
        else{
            if(operador === "1"){
                result = x + y;
            }
            else if(operador === "2"){
                result = x - y;
            }
            else if(operador === "3"){
                result = x * y;
            }
            else if(operador === "4"){
                result = x / y;
            }
            txt.textContent = "O resultado é = " + result;
        }
    }


    function Compare(){
        let a = document.getElementById('firstString').value;
        let b = document.getElementById('secondString').value;

        if(a.length > b.length){
            text = "A primeira string " + "(" + a.length + ")" + " é maior que a segunda string " + "(" + b.length + ")";
        }
        else if(a.length < b.length){
            text = "A primeira string " + "(" + a.length + ")" + " é menor que a segunda string " + "(" + b.length + ")";
        }
        else{
            text = "A primeira string " + "(" + a.length + ")" + " é igual à segunda string " + "(" + b.length + ")";
        }
        document.getElementById("text").innerHTML = text;
    }


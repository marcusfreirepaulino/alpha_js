
    document.querySelector('button').addEventListener('click', stringToJSON);

    function stringToJSON(){
        
        try{
        const userInput = document.querySelector('textarea').value;
        const JSONoutput = JSON.parse(userInput);
        console.log(JSONoutput); 

        }
        catch(e){
            console.error(e);
        }
        return true;
    }

    document.querySelector('button').addEventListener('click', function(){
        const option = document.querySelector('select').value;

        switch(option){
            case "1":
                document.querySelector('.hidden-result').style.backgroundImage = "url('imgs/apple.png')"
                document.querySelector('.hidden-result').style.backgroundSize = "cover"
                break;
            case "2":
                document.querySelector('.hidden-result').style.backgroundImage = "url('imgs/banana.png')"
                document.querySelector('.hidden-result').style.backgroundSize = "cover"
                break;
            case "3":
                document.querySelector('.hidden-result').style.backgroundImage = "url('imgs/grapes.png')"
                document.querySelector('.hidden-result').style.backgroundSize = "cover"
                break;
            case "4":
                document.querySelector('.hidden-result').style.backgroundImage = "url('imgs/tangerine.png')"
                document.querySelector('.hidden-result').style.backgroundSize = "cover"
                break;
            case "5":
                document.querySelector('.hidden-result').style.backgroundImage = "url('imgs/mango.png')"
                document.querySelector('.hidden-result').style.backgroundSize = "cover"
                break;
        }
    })
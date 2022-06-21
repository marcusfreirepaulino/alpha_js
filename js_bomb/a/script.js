
    const bomb = document.getElementById('bomb')
    const timeout = setTimeout(bombExplosion, 10000);

    function bombExplosion(){
        bomb.style.color = "red"
        return;
    }

    bomb.addEventListener('click', () =>
    {
        clearTimeout(timeout);
    }

    )
"use strict";

const selectElement  = document.querySelector('select');

const manufacturer = document.getElementById('manufacturer'),
    price = document.getElementById('price'),
    zeroToHundred = document.getElementById('zero-to-hundred'),
    maxSpeed = document.getElementById('max-speed');
 

selectElement.addEventListener('change', (e) =>{
    const txtResult = document.getElementById('post-text');
    const imgResult = document.getElementById('post-image');

    switch(selectElement.value){
        case "Mercedes-AMG":
            imgResult.setAttribute('src', 'imgs/marcedes.png');

            manufacturer.textContent = "Fabricante: Mercedes"
            price.textContent = "Preço: R$ 1.309.157";
            zeroToHundred.textContent = "0-100km: 2,9s";
            maxSpeed.textContent = "Velocidade máxima: 316 km/h"

            break;

        case "Ferrari 488":
            imgResult.setAttribute('src', 'imgs/ferrari.png');

            manufacturer.textContent = "Fabricante: Ferrari"
            price.textContent = "Preço: R$ 2.830.000";
            zeroToHundred.textContent = "0-100km: 2,9s";
            maxSpeed.textContent = "Velocidade máxima: 343 km/h"

            break;

        case "Lamborghini Huracán":
            imgResult.setAttribute('src', 'imgs/lamborghini.png');
            
            manufacturer.textContent = "Fabricante: Lamborghini"
            price.textContent = "Preço: R$ 2.900.000";
            zeroToHundred.textContent = "0-100km: 2,9s";
            maxSpeed.textContent = "Velocidade máxima: 325 km/h"

            break;

        case "Honda NSX":
            imgResult.setAttribute('src', 'imgs/honda.png');
                        
            manufacturer.textContent = "Fabricante: Honda"
            price.textContent = "Preço: R$ 2.300.000";
            zeroToHundred.textContent = "0-100km: 2,7s";
            maxSpeed.textContent = "Velocidade máxima: 278 km/h"

            break;

    }
    

    txtResult.textContent = e.target.value;

});

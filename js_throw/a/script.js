
    document.querySelector('button').addEventListener('click', Authenticator);
    
    function User(name, birthDate, weight, height, gender){
        this.name = name
        this.birthDate = birthDate;
        this.height = height;
        this.weight = weight;
        this.gender = gender;
    }


    function Authenticator(){
        const userName = document.getElementById('name').value;
        const userWeight = parseFloat(document.getElementById('weight').value);
        const userHeight = parseInt(document.getElementById('height').value, 10);
        const userGender = document.querySelector('select').value;
        let chosenGender;

        switch(userGender){
            case "masculine":
                chosenGender = "Masculino";
                break;
            case "feminine":
                chosenGender = "Feminino";
                break;
            case "other":
                chosenGender = "Outro";
                break;
        }
      
        const chosenBirthYear = parseInt(document.getElementById('birthYear').value);
        // Convert the month input to the monthIndex format:     
        const chosenBirthMonth = parseInt(document.getElementById('birthMonth').value, 10) - 1; 
        /////////////////////
        const chosenBirthDay = parseInt(document.getElementById('birthDay').value);

        let chosenBirthDate = new Date(chosenBirthYear, chosenBirthMonth, chosenBirthDay);

        // Verify if the name input has a length larger than 5, and if it is a string.
        try{
            if(userName.length < 5 || userName === ""){
                throw "Field name is invalid!"
            }
        /////////////////////

        // Verify if the birthdate is valid.
        if(chosenBirthYear < 1900 || chosenBirthMonth > 11 || chosenBirthMonth < 0 || 
            chosenBirthDate.getTime() > new Date().getTime() || chosenBirthDay < 1 || chosenBirthDay > 31 ||
            isNaN(chosenBirthDate.getTime())){
             throw "Field birthDate is invalid!"}
        /////////////////////
        
        // Verify if the values of the inputs "height" and "weight" are numeric.
        if(isNaN(userHeight)){
            throw "Field height is invalid!"
        }
        /////////////////////
        
        // Verify if the birthdate is valid.
        if(chosenBirthYear < 1900 || chosenBirthMonth > 11 || chosenBirthMonth < 0 || 
            chosenBirthDate.getTime() > new Date().getTime() || chosenBirthDay < 1 || chosenBirthDay > 31 ||
            isNaN(chosenBirthDate.getTime()) || chosenBirthDate.getDate() !== chosenBirthDay){
            throw "Field birthDate is invalid!"
         }
        /////////////////////

        // Verify if the values of the inputs "height" and "weight" are numeric.
        if(isNaN(userHeight)){
            throw "Field height is invalid!"
        }
        if(isNaN(userWeight)){
            throw "Field weight is invalid!"
        }
        const userInfo = new User(userName, chosenBirthDate, userWeight, userHeight, chosenGender);
        /////////////////////
        console.log(userInfo);

        document.querySelector('li:nth-child(1)').textContent = "name: " + userInfo.name;
        document.querySelector('li:nth-child(2)').textContent = "birthDate: " + userInfo.birthDate;
        document.querySelector('li:nth-child(3)').textContent = "weight: " + userInfo.weight;
        document.querySelector('li:nth-child(4)').textContent = "height: " + userInfo.height;
        document.querySelector('li:nth-child(5)').textContent = "gender: " + userInfo.gender;

        document.getElementById('post-json-string').textContent = JSON.stringify(userInfo);
        }

              
        catch(e){
            console.error(e)
            document.getElementById('post-error-message').textContent = e;

        }



    }
